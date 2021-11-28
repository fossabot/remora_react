import TranslationToggleButton from "../UI/atoms/TranslationToggleButton";
import BasicButton from "../UI/atoms/BasicButton";

function Front() {
    return (
        <div className="ExtreactPage" style={{ padding: "1rem 0" }}>
            <h2>프론트페이지</h2>
            <BasicButton text="123123123" />
            <br />
            <TranslationToggleButton />
        </div>
    );
}
export default Front;
