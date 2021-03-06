/** @jsx jsx */
import { jsx } from 'theme-ui';

const Note = ({ note }) => (
    <div sx={{ variant: 'containers.page' }}>
        <h1>Note: {note.title} </h1>
    </div>
);

export default Note;

export async function getServerSideProps({ params, req, res }) {
    const response = await fetch(
        `http://localhost:3000/api/notes/${params.id}`
    );

    // so much power!
    if (!response.ok) {
        res.writeHead(302, { Location: '/notes' });
        res.end();
        return { props: {} };
    }

    const { data } = await response.json();

    if (data) {
        return {
            props: { note: data },
        };
    }
}
