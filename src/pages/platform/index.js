import React from 'react';
import Layout from '@theme/Layout';

function Platform() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/hello.js</code> and save to reload.
        </p>
        <div class="avatar">
          <img
            class="avatar__photo"
            src="https://avatars1.githubusercontent.com/u/165856?s=460&amp;v=4"
          />
          <div class="avatar__intro">
            <h4 class="avatar__name">Hector Ramos</h4>
            <small class="avatar__subtitle">React Native @facebook</small>
          </div>
        </div>
        <div>
          <button class="button button--outline button--primary">Primary</button>
          <button class="button button--outline button--secondary">Secondary</button>
          <button class="button button--outline button--success">Success</button>
          <button class="button button--outline button--info">Info</button>
          <button class="button button--outline button--warning">Warning</button>
          <button class="button button--outline button--danger">Danger</button>
        </div>
      </div>
    </Layout>
  );
}

export default Platform;