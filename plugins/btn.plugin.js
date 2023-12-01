const plugin = require("tailwindcss/plugin")

module.exports = plugin(function ({ addUtilities, theme }) {
    const variants = ["primary", "secondary", "danger", "success"];

    const colors = theme("colors");

    const btnUtilities = {}

    for (const color of variants) {
        if (typeof colors[color] === "object") {
            // colors
            const color1 = colors[color].DEFAULT;
            const color2 = colors[color].foreground;
            const boxShadow = `0 1px 6px 0 ${color1}`;
            // outline btn
            btnUtilities[`.btn-outline-${color}`] = {
                borderColor: color1,
                borderWidth: theme("borderWidth.2"),
                backgroundColor: "transparent",
                color: color1,
                "&:hover": {
                    boxShadow,
                    backgroundColor: color1,
                    color: theme("colors.white"),
                }
            }
            // solid btn
            btnUtilities[`.btn-solid-${color}`] = {
                color: color2,
                backgroundColor: color1,
                "&:hover": {
                    boxShadow, backgroundColor: `hsl(var(--${color}) / 0.9)`,
                }
            }
            // ghost btn
            btnUtilities[`.btn-ghost-${color}`] = {
                color: color1,
                backgroundColor: "transparent",
                "&:hover": {
                    boxShadow: theme("boxShadow.sm"),
                    backgroundColor: `hsl(var(--${color}) / 0.06)`,
                },
                "&:active": {
                    backgroundColor: `hsl(var(--${color}) / 0.12)`,
                }
            }
            // link btn
            btnUtilities[`.btn-link-${color}`] = {
                color: color1,
                textUnderlineOffset: "4px",
                backgroundColor: "transparent",
                fontWeight: theme("fontWeight.semibold"),
                "&:hover": {
                    textDecorationLine: "underline",
                }
            }
        }


    }

    addUtilities(btnUtilities)
}
)