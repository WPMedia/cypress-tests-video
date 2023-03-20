//https://www.techtonic.com/puppeteer-can-fill-in-cypress-gaps/
const puppeteer = require("puppeteer");

async function getArcToken({ baseUrl, username, password }) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox"],
    });
    try {
        const page = await browser.newPage();

        await page.goto(baseUrl);
        await page.waitForSelector("input[name=username]", {
            visible: true,
            timeout: 0,
        });

        await page.click("input[name=username]");

        await page.type(
            "input[name=username]",
            username || process.env.CYPRESS_TEST_USERNAME
        );
        // Check if username and password fields both present in same page
        if ((await page.$("input[name=password]")) !== null) {
            await page.click("input[name=password]");
            await page.type(
                "input[name=password]",
                password || process.env.CYPRESS_TEST_PASSWORD
            );
        } else {
            await page.click("input[type=submit]");
            await page.waitForSelector("input[name=password]", {
                visible: true,
                timeout: 0,
            });
            await page.click("input[name=password]");
            await page.type(
                "input[name=password]",
                password || process.env.CYPRESS_TEST_PASSWORD
            );
        }

        await Promise.all([
            page.waitForResponse(
                (res) =>
                    res.url().includes('arcpublishing.com/user.json') &&
                    res.status() === 200
            ),
            page.click('#okta-signin-submit'),
        ])

        const cookies = await page.cookies();

        const arcCookies = cookies.filter(
            (cookie) =>
                cookie.name === "Arc-Token" || cookie.name === "Arc-Client-Info"
        );
        await browser.close();

        return arcCookies;
    } catch (error) {
        console.error(error);
        await browser.close();
        return [];
    }
}

module.exports = getArcToken;