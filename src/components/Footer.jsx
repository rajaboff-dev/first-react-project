export default function Footer() {
    return (
        <footer className="flex items-center justify-center h-24">
            <p className="text-sm leading-loose">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
        </footer>
    )
}