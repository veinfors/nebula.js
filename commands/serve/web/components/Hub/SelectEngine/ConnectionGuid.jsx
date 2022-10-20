import React from 'react';
import Link from '@mui/material/Link';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

const ConnectionGuid = ({ showGuid }) => (
  <Collapse in={showGuid}>
    <Typography variant="h6" gutterBottom style={{ marginTop: '1rem' }}>
      WebSocket URL
    </Typography>
    <Typography variant="body2" paragraph>
      The development server needs to connect to and communicate with the Qlik Associative Engine running within any of
      Qlik&apos;s product offerings. The connection is done through the WebSocket protocol using a WebSocket URL format
      that differs slightly between products. Enter the WebSocket URL that corresponds to the Qlik product you are
      using.
    </Typography>

    <Typography variant="subtitle1" gutterBottom>
      Qlik Cloud Services
    </Typography>
    <Typography variant="body2" paragraph>
      WebSocket URL format:{' '}
      <code>wss://&lt;tenant&gt;.&lt;region&gt;.qlikcloud.com?qlik-web-integration-id=&lt;web-integration-id&gt;</code>
      <br />
      Example: <code>wss://qlik.eu.qlikcloud.com?qlik-web-integration-id=xxx</code>
      <br />
      <br />
      The <code>qlik-web-integration-id</code> must be present in order for QCS to confirm that the request originates
      from a whitelisted domain.
      <br />
      <br />
      For more info, visit{' '}
      <Link
        color="secondary"
        underline="always"
        href="https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Admin/mc-adminster-web-integrations.htm"
      >
        Managing web integrations
      </Link>
      .
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Qlik Sense Enterprise on Windows
    </Typography>
    <Typography variant="body2" paragraph>
      WebSocket URL format: <code>wss://&lt;sense-host.com&gt;/&lt;virtual-proxy-prefix&gt;</code>
      <br />
      Example: <code>wss://mycompany.com/bi</code>
      <br />
      <br />
      Note that for the Qlik Sense Proxy to allow sessions from this webpage, <code>{window.location.host}</code> needs
      to be whitelisted in QMC in your Qlik Sense Enterprise on Windows deployment. In addition, you need to enable{' '}
      <i>Has secure attribute</i> and set <i>SameSite attribute</i> to <i>None</i>.
      <br />
      Make sure you are logged in to Qlik Sense in another browser tab.
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Qlik Core
    </Typography>
    <Typography variant="body2" paragraph>
      WebSocket URL format: <code>ws://&lt;host&gt;:&lt;port&gt;</code>
      <br />
      Example: <code>ws://localhost:9076</code>
      <br />
      <br />
      For more info, visit{' '}
      <Link
        color="secondary"
        underline="always"
        href="https://core.qlik.com/services/qix-engine/apis/qix/introduction/#websockets"
      >
        QIX WebSocket Introduction
      </Link>
      .
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Qlik Sense Desktop
    </Typography>
    <Typography variant="body2" paragraph>
      WebSocket URL format: <code>ws://localhost:4848</code>
    </Typography>
  </Collapse>
);

export default ConnectionGuid;