export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard", "/blog", '/form/stepOne', '/form/stepTwo'] }