import Link from "next/link"

const Menu = ({ href, label }) => (
  <li>
    <a href={href}>{label}</a>
    <style jsx>{`
       {
        padding: 6px 4px;
      }

      a {
        color: #fff;
        text-decoration: none;
        font-size: 1.5em;
      }

      a:hover {
        border-bottom: 3px solid white;
      }

      li {
        display: inline-block;
        width: 100%;
        text-align: center;
      }

      li:first-of-type {
        text-align: left;
      }
    `}</style>
  </li>
)

export default ({ children }) => (
  <main>
    <nav>
      <ul>
        <Menu href={"/"} label={"JMES"} />
        {["reading", "watching", "writing", "contact"].map(link => (
          <Menu key={link} href={`#${link}`} label={link.toLowerCase()} />
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
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
      }
    `}</style>
  </main>
)
