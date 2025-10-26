import { useEffect } from "react";

export default function ContactPage() {
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScnnbnSoIpNizG1gU_pDVuDq9GifE1EeevYd3-n4Uy1fGAQiw/viewform";

    useEffect(() => {
        location.href = formURL;
    }, []);

    return (
        <div>
            <a href={formURL} target="_blank" rel="noopener noreferrer">
                お問い合わせフォーム
            </a>
        </div>
    );
}
