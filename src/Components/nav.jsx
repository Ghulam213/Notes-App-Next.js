/** @jsx jsx */
import { jsx, Switch } from 'theme-ui';
import Link from 'next/link';

const Nav = (props) => (
    <header
        sx={{
            height: '60px',
            width: '100vw',
            bg: 'primary',
            borderBottom: '1px solid',
            borderColor: 'primary',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <nav
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                width: '70%',
            }}
        >
            <Link href="/">
                <a
                    sx={{
                        fontWeight: 'bold',
                        fontSize: 4,
                        cursor: 'pointer',
                        pr: 4,
                    }}
                >
                    NOTE APP
                </a>
            </Link>

            <Link href="/notes">
                <a
                    sx={{
                        color: 'text',
                        fontSize: 3,
                        cursor: 'pointer',
                        pr: 4,
                    }}
                >
                    NOTES
                </a>
            </Link>
            <a
                sx={{
                    color: 'text',
                    fontSize: 3,
                    cursor: 'pointer',
                }}
                href={process.env.HELP_APP_URL}
            >
                Help
            </a>
        </nav>
        <div>
            <Switch label="Toggle Theme" onChange={props.themeToggler} />
        </div>
    </header>
);

export default Nav;
