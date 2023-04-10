import './styles.css';

type Props = {
    text: string;
}
export default function Btn({ text }: Props) {
    return (
        <div className="btn-next">
            <button>{text}</button>
        </div>
    );
}