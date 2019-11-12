const auth = 'authentication'

const data = sessionStorage.getItem(auth)
var isAuthenticated = false

if (data) {
    console.log(data)
    const authentication = JSON.parse(data)
    isAuthenticated = authentication ? authentication.auth : false
}

export { auth, isAuthenticated }