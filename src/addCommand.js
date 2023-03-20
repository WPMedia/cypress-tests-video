const addGetArcTokenCommand = ({ baseUrl, username, password }) => {

    cy.session(username, () => {
        cy.request({
          method: 'POST',
          url: '/login',
          body: { username, password },
        }).then(({ body }) => {
          window.localStorage.setItem('Arc-Client-Info', body.clientInfoCookie);
          window.localStorage.setItem('Arc-Token', body.arcTokenCookie);
        })
    })
    
    cy.getCookies().then((cookies) => {
        const arcTokenCookie = cookies.find(
            (cookie) => cookie.name === "Arc-Token"
        );
        const clientInfoCookie = cookies.find(
            (cookie) => cookie.name === "Arc-Client-Info"
        );

        if (!arcTokenCookie || !clientInfoCookie) {
            // getArcToken task has to be initiated in the consumer app.
            cy.task("getArcToken", { baseUrl, username, password }).then(
                (cookies) => {
                    cookies.forEach((cookie) => {
                        cy.setCookie(cookie.name, cookie.value, {
                            path: cookie.path,
                            domain: cookie.domain,
                            expiry: cookie.expires,
                            httpOnly: cookie.httpOnly,
                            secure: cookie.secure,
                        });
                    });
                }
            );
        }
    })
}

module.exports = addGetArcTokenCommand