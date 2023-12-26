import Users from "~/server/models/userModel.js";

export default defineEventHandler(async (event:any) => {  
  const body = readBody<any>(event);
  if (body.email == '' || body.password == '') {
      return res.status(500).json({
          success: false,
          message: 'Email or Password is not correct. Please try again'
      })
  }
  let lastmileMode = config.lastmileMode
  User.get_w_select({ email: new RegExp(["^", req.body.email, "$"].join(""), "i") }, "+password").then(result => {
      if (result && result[0] && result[0].password === undefined) {
          res.status(500).json({
              success: false,
              message: 'You haven\'t confirmed your account, please check your email',
              err
          })
      }
      bcrypt.compare(req.body.password, result[0].password).then(bcryptRes => {
          if (bcryptRes) {
              User.get({_id: result[0]._id, is_active: true}).then(async active_user => {
                  if (active_user.length > 0) {
                    /*  if (!active_user[0].lastmileRole && lastmileMode || active_user[0].lastmileRole && !lastmileMode) {
                          return res.status(400).json({
                              success: false,
                              message: 'email or password is wrong',
                          })
                      }
                      */

                      // if(process.env.NODE_ENV === 'production' && !result[0].isEnableFormulir && result[0].role != 'admin') {
                      //     return res.status(400).json({
                      //         success: false,
                      //         message: 'We’re still in closed beta'
                      //     })
                      // }

                      if( !result[0].parentId && (result[0].username == undefined || result[0].username == '') && (req.body.username == undefined || req.body.username == '')) {
                          return res.status(200).json({
                              success: true,
                              message: 'username required',
                          })

                      }
                      const expiresIn = req.body.rememberUser ? '1y' : '2d';
                      var token = jwt.sign({
                          userId: result[0]._id,
                          email: result[0].email,
                          role: result[0].role
                      }, config.jwtKey, {expiresIn : expiresIn})
                      var params = {
                          selector: {email: new RegExp(["^", req.body.email, "$"].join(""), "i")},
                          data: {last_login: Date.now()}
                      }

                      if(req.body.username != undefined && req.body.username != '') {
                          params.data.username = req.body.username
                      }
                      let rules = {}
                      if (result[0].role_id) {
                          let [role] = await Role.get({_id: result[0].role_id})
                          if (role) {
                              rules = role.rules
                          }
                      }
                      if (result[0].parentId) {
                          let parentData = []
                          parentData = await User.get({_id: result[0].parentId, is_active: true})
                          // result[0].bankTransferDefault = []
                          result[0].username = parentData[0].username
                          // params.data.username = parentData[0].username
                      }
                      if(!result[0].isFormulirUser){
                          params.data.isFormulirUser = true;
                      }
                      User.update(params).then(async login_saved => {
                          console.log(login_saved);
                          module.exports.addAuthorization(result[0]._id, result[0].email, req, token)
                          if (result[0].lastmileRole == 'account') {
                              let params = {
                                  user_id: result[0]._id,
                                  title: 'Login',
                                  start: new Date(),
                                  type: 'login',
                                  branch: result[0].branch,
                              }
                          }                              

                          let [aff] = await AffiliateMember.get({user_id:result[0]._id});
                          let formPermissions = result[0].formPermissions;
                          console.log(aff, "aff-------------------------")
                          if(aff && formPermissions){
                            formPermissions["showAffiliateMenu"] = true
                          }

                          // let baseUrl = (req.headers.origin && req.headers.origin.includes("dev-form-front.mengantar.com")) || (req.headers.host && req.headers.host.includes("dev-form-front.mengantar.com"))  ? ('https://dev-form-front-id.mengantar.com/').replace('https://', '').replace('http://', ''): config.baseURL.replace('https://', '').replace('http://', '')
                          //Added check for designer urls to respond with its checkout url
                          res.json({
                              id: result[0]._id,
                              name: result[0].name,
                              config:  {baseUrl : config.baseURL.replace('https://', '').replace('http://', '')},
                              username: result[0].username,
                              email: result[0].email,
                              role_id: result[0].role_id,
                              parentId: result[0].parentId,
                              access: rules,
                              discount: result[0].discount + result[0].discountRate,
                              phone: result[0].phone,
                              language: result[0].language ? result[0].language : 'en',
                              theme: result[0].theme ? result[0].theme : 'light',
                              role: result[0].role,
                              canDrop: result[0].canDrop,
                              formPermissions: formPermissions,
                              is_active: result[0].is_active,
                              balance: result[0].balance,
                              lastmileRole: result[0].lastmileRole,
                              branch: result[0].branch,
                              region: result[0].region,
                              whenPickup: result[0].whenPickup,
                              emails: result[0].emails,
                              telegramIds: result[0].telegramIds,
                              whenDelivered: result[0].whenDelivered,
                              whenAttention: result[0].whenAttention,
                              whenAction: result[0].whenAction,
                              telegramId: result[0].telegramId,
                              telegramNotification: result[0].telegramNotification,
                              bankTransferDefault: result[0].bankTransferDefault,
                              autoWithdraw: result[0].autoWithdraw, 
                              autoWithdrawData: result[0].autoWithdrawData, 
                              autoWithdrawAdminDisabled: result[0].autoWithdrawAdminDisabled ? result[0].autoWithdrawAdminDisabled : 0,
                              documentStatus: result[0].documentStatus,
                              isReservedBalance: result[0].isReservedBalance,
                              isTagged: result[0].isTagged, 
                              defaultCommission: result[0].defaultCommission, 
                              commissionType: result[0].commissionType, 
                              token,
                              success: true
                          })
                      }).catch(err => {
                          console.log('err',err)
                          res.status(500).json({
                              success: false,
                              message: 'something is wrong',
                              err
                          })
                      })
                  } else {
                      res.status(400).json({
                          success: false,
                          message: 'Account is inactive'
                      })
                  }
              })
          } else {
              res.status(400).json({
                  success: false,
                  message: 'Email or Password is not correct. Please try again'
              })
          }
      })
  }).catch(err => {
      console.log('error', err)
      res.status(400).json({
          success: false,
          message: 'Email or Password is not correct. Please try again',
          err
      })
  })
});
