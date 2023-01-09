
import UAuth from '@uauth/js'

const uauth = new UAuth({
    clientID: "58dc2e68-f05d-4af5-9cd6-d9d2bb0e3146",
    redirectUri: "http://localhost:3000",
    scope: "openid wallet email profile:optional social:optional"
  })


window.login = async () => {
    try {
      const authorization = await uauth.loginWithPopup()
   
      console.log(authorization)
    } catch (error) {
      console.error(error)
    }
  }

  
window.logout = async () => {
    await uauth.logout()
    console.log('Logged out with Unstoppable')
  }