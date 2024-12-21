import React from "react";

const DeveloperSetup = () => (
  <section id="developer-setup">
    <h2>Developer Setup</h2>
    <div>
      <h3>VS Code Setup</h3>
      <ul>
        <li>Theme: One Dark Pro</li>
        <li>
          Extensions:
          <ul>
            <li>ESLint</li>
            <li>Prettier</li>
            <li>GitLens</li>
            <li>Docker</li>
            <li>Rainbow Brackets</li>
          </ul>
        </li>
        <li>
          Custom Settings:
          <ul>
            <li>Auto Save: onFocusChange</li>
            <li>Format On Save: enabled</li>
            <li>Tab Size: 2 spaces</li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <h3>Terminal Setup</h3>
      <ul>
        <li>Oh My Zsh with Powerlevel10k theme</li>
        <li>Custom aliases for git and docker commands</li>
        <li>iTerm2 with split panes configuration</li>
        <li>Node Version Manager (nvm)</li>
      </ul>
    </div>
    <div>
      <h3>Preferred Editor Font</h3>
      <ul>
        <li>Primary: JetBrains Mono</li>
        <li>Fallback: Fira Code</li>
        <li>Features: Ligatures enabled</li>
        <li>Size: 14px</li>
      </ul>
    </div>
  </section>
);

export default DeveloperSetup;
