// this is a completely custom component

import React from 'react'

export default function SidenavButtons() {
  return (
    <div>
        <div id="mySidenav" class="sidenav">
            <a href="#" id="about">About</a>
            <a href="#" id="blog">Blog</a>
            <a href="#" id="projects">Projects</a>
            <a href="#" id="contact">Contact</a>
        </div>
        <div style="margin-left:80px;">
            <h2>Hoverable Sidenav Buttons</h2>
            <p>Hover over the buttons in the left side navigation to open them.</p>
        </div>
    </div>
  )
}
