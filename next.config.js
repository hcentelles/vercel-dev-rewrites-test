module.exports = {
    async rewrites() {
        return [
            { "source":  "/post/:id", "destination":  "/post"},
        ]
    },
}