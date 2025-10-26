import { redirect } from "next/navigation";

export default function ContactPage() {
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScnnbnSoIpNizG1gU_pDVuDq9GifE1EeevYd3-n4Uy1fGAQiw/viewform";

    redirect(formURL);
}
