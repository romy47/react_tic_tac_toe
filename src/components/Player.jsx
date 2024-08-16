export default function Player({ name, symbol }) {
    return (
        <li class='d-flex align-items-center'>
            <span class='me-4'>{name}</span>
            <span class='me-4'>{symbol}</span>
            <button class='btn btn-outline-light btn-sm'>Edit</button>
        </li>
    );
}