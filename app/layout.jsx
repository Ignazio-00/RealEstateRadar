import "@/assets/styles/globals.css"
export const metadata = {
    title: "RealEstateRadar",
    description: "Find the perfect Real Estate property for you",
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <main>{children}</main>
        </body>
    </html>
  )
}

export default MainLayout