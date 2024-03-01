import "@/assets/styles/globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
    title: "RealEstateRadar",
    description: "Find the perfect Real Estate property for you",
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Navbar />
            <main>{children}</main>
        </body>
    </html>
  )
}

export default MainLayout