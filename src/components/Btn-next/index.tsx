import './styles.css';

type Props = {
    text: string;
}
export default function BtnNext({text}: Props) {
    return (
        <div className="btn-next">
           {text}
        </div>
    );
}