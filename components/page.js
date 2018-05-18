import Link from "next/link"

const Menu = ({ href, label }) => (
  <li>
    <Link href={href}>
      <a>{label}</a>
    </Link>
    <style jsx>{`
       {
        padding: 6px 4px;
      }

      a {
        color: #fff;
        text-decoration: none;
        font-size: 1em;
      }

      li {
        display: inline-block;
      }
    `}</style>
  </li>
)

export default ({ children }) => (
  <main>
    <nav>
      <ul>
        <Menu href={"/"} label={"HOME"} />
        {["news", "newest", "ask", "jobs"].map(link => (
          <Menu key={link} href={`/${link}`} label={link.toUpperCase()} />
        ))}
      </ul>
    </nav>
    <div>{children}</div>
    <style global jsx>{`
       {
        body {
          font-family: Helvetica, sans-serif;
        }

        nav {
          text-align: left;
          background-color: #000;
          color: #fff;
          padding: 1em;
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          right: 0;
        }

        a {
          color: #0e0e0e;
          text-decoration: none;
        }
      }
    `}</style>
    <style jsx>{`
       {
        div {
          width: 100%;
          color: #333;
          padding-top: 7em;
        }

        ul {
          list-style-type: none;
        }
      }
    `}</style>
  </main>
)
