module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#213DCE",
                    200: "#1f3ac2",
                    300: "#162a8c",
                    400: "#213DCE",
                    500: "#213DCE"
                },
                gray: {
                    250: "#E0E0E0",
                }
            },
        },
    },
    plugins: [],
}
