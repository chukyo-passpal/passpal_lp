import { useEffect } from "react";

export default function FeedbackPage() {
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeu7t-Z3PgwvG0aKY4XCSz160FyjE03SNUyu7Qhq11F_2Z_Dg/viewform";

    useEffect(() => {
        location.href = formURL;
    }, []);

    return (
        <div>
            <a href={formURL} target="_blank" rel="noopener noreferrer">
                フィードバックフォーム
            </a>
        </div>
    );
}
