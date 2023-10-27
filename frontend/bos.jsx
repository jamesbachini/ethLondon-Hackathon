return (
  <div style={{
    "width": "100% !important",
    "-webkit-background-size": "cover",
    "-moz-background-size": "cover",
    "-o-background-size": "cover",
    "background-size": "cover",
    background: "url(https://cloudflare-ipfs.com/ipfs/bafybeiez3pxezg6nh42ktu5rwhi5hxzh4i4ajedabgk3od3hahw5fh5s7u) no-repeat center center fixed"
  }}>
    <div style={{
      "max-width": "95%",
      margin: "0 auto",
    }}>
      <div
        style={{
          display: "flex",
          "-webkit-flex-direction": "row",
          "-ms-flex-direction": "row",
          "flex-direction": "row",
          "-webkit-align-items": "center",
          "-webkit-box-align": "center",
          "-ms-flex-align": "center",
          "align-items": "center",
          "-webkit-box-pack": "center",
          "-webkit-justify-content": "center",
          "-ms-flex-pack": "center",
          "justify-content": "center",
          width: "100%",
          "padding-top": "1%",
        }}
      >
        <div
          className="blue"
          style={{
            "-webkit-flex": "1 1 auto",
            "-ms-flex": "1 1 auto",
            flex: "1 1 auto",
            "-webkit-text-align": "center",
            "text-align": "center",
            "font-size": "1.8em",
            "font-weight": "bold",
          }}
        >
          mETH
        </div>
        <div
          className="mobile-hidden"
          style={{
            "-webkit-flex": "1 1 auto",
            "-ms-flex": "1 1 auto",
            flex: "1 1 auto",
            "-webkit-text-align": "center",
            "text-align": "center",
          }}
        >
          TVL: $0m
        </div>
        <div
          style={{
            "-webkit-flex": "1 1 auto",
            "-ms-flex": "1 1 auto",
            flex: "1 1 auto",
            "-webkit-text-align": "center",
            "text-align": "center",
          }}
        >
          <span className="mobile-hidden" style={{ "font-size": "0.6em" }}>
            Goerli
          </span>
          <button id="connect">CONNECT</button>
        </div>
      </div>
      <div
        className="blue"
        style={{
          "-webkit-text-align": "center",
          "text-align": "center",
          padding: "3% 0 0 0",
          "font-weight": "bold",
        }}
      >
        Multichain Staked Ethereum Index Token
      </div>
      <div
        style={{
          "-webkit-text-align": "center",
          "text-align": "center",
          margin: "3% auto",
        }}
      >
        <img
          src="https://cloudflare-ipfs.com/ipfs/bafkreib56dbymf6bil74mflmqqkmmupffxzjr4krrxdmeu4frcczcnxqv4"
          alt="logos"
          style={{ width: "600px", "max-width": "80%", opacity: "0.7" }}
        />
      </div>
      <div
        id="app"
        style={{
          margin: "3% auto",
          padding: "2% 0",
          border: "1px solid #444",
          "max-width": "820px",
        }}
      >
        <div
          style={{
            display: "flex",
            "-webkit-flex-direction": "row",
            "-ms-flex-direction": "row",
            "flex-direction": "row",
            "-webkit-align-items": "center",
            "-webkit-box-align": "center",
            "-ms-flex-align": "center",
            "align-items": "center",
            "-webkit-box-pack": "center",
            "-webkit-justify-content": "center",
            "-ms-flex-pack": "center",
            "justify-content": "center",
            "max-width": "800px",
            margin: "0px auto",
          }}
        >
          <div
            style={{
              "-webkit-flex": "1 1 auto",
              "-ms-flex": "1 1 auto",
              flex: "1 1 auto",
              "-webkit-text-align": "center",
              "text-align": "center",
            }}
          >
            <input
              type="text"
              id="deposit-amount"
              placeholder="LSTs"
              style={{ "-webkit-text-align": "center", "text-align": "center" }}
            />
            <button id="deposit">DEPOSIT</button>
          </div>
          <div
            style={{
              "-webkit-flex": "1 1 auto",
              "-ms-flex": "1 1 auto",
              flex: "1 1 auto",
              "-webkit-text-align": "center",
              "text-align": "center",
            }}
          >
            <input
              type="text"
              id="withdraw-amount"
              placeholder="mETH"
              style={{ "-webkit-text-align": "center", "text-align": "center" }}
            />
            <button id="withdraw">WITHDRAW</button>
          </div>
          <div
            style={{
              "-webkit-flex": "1 1 auto",
              "-ms-flex": "1 1 auto",
              flex: "1 1 auto",
              "-webkit-text-align": "center",
              "text-align": "center",
            }}
          >
            <input
              type="text"
              id="bridge-amount"
              placeholder="mETH"
              style={{ "-webkit-text-align": "center", "text-align": "center" }}
            />
            <button id="bridge">BRIDGE</button>
          </div>
        </div>
        <div
          style={{
            "max-width": "800px",
            margin: "20px auto",
            "-webkit-text-align": "center",
            "text-align": "center",
          }}
        >
          <table style={{ width: "100%", background: "#000000AA" }}>
            <tbody>
              <tr className="blue">
                <th>Asset</th>
                <th>Network</th>
                <th>Balance</th>
              </tr>
              <tr>
                <td>ETH</td>
                <td>Mainnet</td>
                <td id="eth-balance"> </td>
              </tr>
              <tr>
                <td>mETH</td>
                <td>Mainnet</td>
                <td id="meth-balance"> </td>
              </tr>
              <tr>
                <td>mETH</td>
                <td>Aurora</td>
                <td id="metha-balance"> </td>
              </tr>
              <tr>
                <td>stETH</td>
                <td>Mainnet</td>
                <td id="steth-balance"> </td>
              </tr>
              <tr>
                <td>rETH</td>
                <td>Mainnet</td>
                <td id="reth-balance"> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        id="msg"
        style={{
          "-webkit-text-align": "center",
          "text-align": "center",
          padding: "1% 0",
          "font-size": "1.4em",
        }}
      >
        Gain diversified exposure to staked Ethereum on any chain
      </div>
      <div style={{ width: "300px", margin: "60px auto" }}>
        <ul>
          <li>Fully collateralized</li>
          <li>Sustainable PoS revenues</li>
          <li>Permissionless</li>
          <li>Built on Ethereum &amp; Near</li>
        </ul>
      </div>
      <div style={{ "-webkit-text-align": "center", "text-align": "center" }}>
        <a
          className="blue"
          href="https://github.com/jamesbachini/ethLondon-Hackathon"
          target="_blank"
        >
          @github
        </a>{" "}
        |
        <a className="blue" href="https://snapshot.org/" target="_blank">
          @dao
        </a>{" "}
        |
        <a
          className="blue"
          href="https://twitter.com/james_bachini"
          target="_blank"
        >
          @twitter
        </a>
      </div>
      <div
        style={{
          "-webkit-text-align": "center",
          "text-align": "center",
          padding: "1% 0 0 0",
        }}
      >
        <h3>
          <a href="#learn-more">learn more</a>
        </h3>
      </div>
      <div style={{ "max-width": "800px", margin: "auto" }} id="learn-more">
        {/*
      <div style="border: 1px solid #CCC; border-radius: 3px; height: 400px; text-align: center;">
          <iframe src="https://www.youtube.com/embed/abc?rel=0&amp;hd=1" allowfullscreen="" height="100%" width="100%" frameborder="0"></iframe>
      </div>
  */}
        <h2 className="blue" id="introduction">
          introduction
        </h2>
        <p>
          The multichain Staked ETH Index Token (mETH), is a unique DeFi
          solution that brings together a decentralized financial ecosystem of
          various blockchain protocols like Ethereum and NEAR Aurora.
        </p>
        <p>
          The mETH project is a cross chain index fund of staked tokens like
          stETH and rETH, delivering a superior-grade interoperability for a
          lucrative and secure yield farming experience. The token allows users
          to deposit stETH and rETH to mint mETH tokens and bridge them across
          multiple chains, enabling seamless cross-chain transactions.
        </p>
        <hr style={{ width: "50%", margin: "30px auto" }} />
        <h2 className="blue" id="liquid-staking-tokens">
          liquid staking tokens
        </h2>
        <p>
          When you stake a token on a PoS blockchain, you earn validator rewards
          creating a yield on your holdings. Liquid staking tokens outsource the
          technical staking requirements to a 3rd party giving users a simple
          ERC20 token which represents a staked position.
        </p>
        <p>
          Liquid staking tokens represent your staked assets and any potential
          rewards you may earn. Tthese tokens aren't locked; they're liquid,
          meaning they can be traded, swapped, bridged or used in various DeFi
          protocols for other activities like lending, borrowing, or providing
          liquidity in decentralized exchanges (DEXs).
        </p>
        <p>
          mETH is a index token creating a cross chain wrapper for various
          liquid staking tokens.
        </p>
        <hr style={{ width: "50%", margin: "30px auto" }} />
        <h2 className="blue" id="tokenized-assets">
          tokenized assets
        </h2>
        <p>mETH is an ERC20 token with some additional functionality.</p>
        <ul>
          <li>
            The deposit function allows a user to send stETH &amp; rETG and mint
            an equivalent amount of mETH in return
          </li>
          <li>
            The withdraw function allows a user to redeem mETH in exchange for
            their stETH &amp; rETH
          </li>
          <li>
            The stake function allows a user to commit mETH to the staking pool
            to earn rewards
          </li>
          <li>
            The unstake function releases the mETH and collects the rewards
          </li>
        </ul>
      </div>
      <div style={{ "-webkit-text-align": "center", "text-align": "center" }}>
        <div style={{ padding: "2% 0 1% 0" }}>
          built on the lego bricks of DeFi
        </div>
      </div>
      <div style={{ "-webkit-text-align": "center", "text-align": "center" }}>
        <a href="#top">back to top</a>
      </div>
      <div style={{ height: "200px" }} />
    </div>
  </div>
);
