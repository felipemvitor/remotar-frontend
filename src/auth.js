const data = sessionStorage.getItem('login')
var isAuthenticated = false

if (data) {
    const login = JSON.parse(data)
    isAuthenticated = login ? login.auth : false
}

export { isAuthenticated }