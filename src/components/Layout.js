import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"

export default function Layout ({children}){
const data = useStaticQuery(
    graphql`
    query {
        site {
        siteMetadata {
            title
            gitHub
        }
        }
    }
    `
)
    return(

<test></test>

    )
}
const 