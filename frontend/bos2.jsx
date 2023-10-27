const code = `
  <link href="https://fonts.googleapis.com/css2?family=Mali:wght@300;400;600&family=Source+Code+Pro&display=swap" rel="stylesheet"> 
  <style>
    html { background: url(https://cloudflare-ipfs.com/ipfs/bafybeiez3pxezg6nh42ktu5rwhi5hxzh4i4ajedabgk3od3hahw5fh5s7u) no-repeat center center fixed; -webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover; }
    body { font-family: "Source Code Pro", sans-serif; background: #00000088; color: #CCC; margin: 0px;}
    button { width: 120px; height: 30px; border: none; border-radius: 15px; background: #000; background: -webkit-linear-gradient(#349bf5, #125748); color: #CCC; cursor: pointer; margin: 5px; }
    input[type=text] { width: 80px; height: 24px; border-radius: 5px; }
    th { border-bottom: 1px solid #444; font-size: 1.1em; }
    a { color: #CCC; }
    .blue { color: #2368a3; background: -webkit-linear-gradient(#349bf5, #22a78a); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: none; }
    @media screen and (max-width: 720px) {
      .mobile-hidden { display: none; }
    }
  </style>

    <div style="max-width: 95%; margin: 0 auto;">
      <div style="display: flex; flex-direction: row; align-items: center; justify-content: center; width: 100%; padding-top: 1%">
        <div class="blue" style="flex: 1 1 auto; text-align: center; font-size: 1.8em; font-weight: bold;">mETH</div>
        <div class="mobile-hidden" style="flex: 1 1 auto; text-align: center;">TVL: $0m</div>
        <div style="flex: 1 1 auto; text-align: center;">
          <span class="mobile-hidden" style="font-size:0.6em;" class="wallet-address">Goerli</span>
          <button id="connect">CONNECT</button>
          </div>
      </div>
      <div class="blue" style="text-align: center; padding: 3% 0 0 0; font-weight: bold;">
        Multichain Staked Ethereum Index Token
      </div>

      <div style="text-align: center; margin: 3% auto;">
        <img src="https://cloudflare-ipfs.com/ipfs/bafkreib56dbymf6bil74mflmqqkmmupffxzjr4krrxdmeu4frcczcnxqv4" alt="logos" style="width: 600px; max-width: 80%; opacity: 0.7;" />
      </div>

      <div id="app" style="margin: 3% auto; padding: 2% 0; border: 1px solid #444; max-width: 820px;">
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: center; max-width: 800px; margin: 0px auto;">
          <div style="flex: 1 1 auto; text-align: center;">
            <input type="text" id="deposit-amount" placeholder="LSTs"  style="text-align: center;" />
            <button id="deposit">DEPOSIT</button>
          </div>
          <div style="flex: 1 1 auto; text-align: center;">
            <input type="text" id="withdraw-amount" placeholder="mETH" style="text-align: center;" />
            <button id="withdraw">WITHDRAW</button>
          </div>
          <div style="flex: 1 1 auto; text-align: center;">
            <input type="text" id="bridge-amount" placeholder="mETH" style="text-align: center;" />
            <button id="bridge">BRIDGE</button>
          </div>
        </div>

        <div style="max-width: 800px; margin: 20px auto; text-align: center;">
          <table style="width: 100%; background: #000000AA;">
            <tr class="blue"><th>Asset</th><th>Network</th><th>Balance</th></th></tr>
            <tr><td>ETH</td><td>Mainnet</td><td id="eth-balance"> </td></tr>
            <tr><td>mETH</td><td>Mainnet</td><td id="meth-balance"> </td></tr>
            <tr><td>mETH</td><td>Aurora</td><td id="metha-balance"> </td></tr>
            <tr><td>stETH</td><td>Mainnet</td><td id="steth-balance"> </td></tr>
            <tr><td>rETH</td><td>Mainnet</td><td id="reth-balance"> </td></tr>
          </table>
        </div>
      </div>
      <div id="msg" style="text-align: center; padding: 1% 0; font-size: 1.4em;">
        Gain diversified exposure to staked Ethereum on any chain
      </div>

      <div style="width: 300px; margin: 60px auto;">
        <ul>
          <li>Fully collateralized</li>
          <li>Sustainable PoS revenues</li>
          <li>Permissionless</li>
          <li>Built on Ethereum &amp; Near</li>
        </ul>
      </div>
      <div style="text-align: center;">
        <a class="blue" href="https://github.com/jamesbachini/ethLondon-Hackathon" target="_blank">@github</a> | 
        <a class="blue" href="https://snapshot.org/" target="_blank">@dao</a> | 
        <a class="blue" href="https://twitter.com/james_bachini" target="_blank">@twitter</a>
      </div>
      <div style="text-align: center; padding: 1% 0 0 0"><h3><a href="#learn-more">learn more</a></h3></div>
      <div style="max-width: 800px; margin: auto;" id="learn-more">
        <h2 class="blue" id="introduction">introduction</h2>
        <p>The multichain Staked ETH Index Token (mETH), is a unique DeFi solution that brings together a decentralized financial ecosystem of various blockchain protocols like Ethereum and NEAR Aurora.</p>
        <p>The mETH project is a cross chain index fund of staked tokens like stETH and rETH, delivering a superior-grade interoperability for a lucrative and secure yield farming experience. The token allows users to deposit stETH and rETH to mint mETH tokens and bridge them across multiple chains, enabling seamless cross-chain transactions.</p>
        <hr style="width: 50%; margin: 30px auto;">
        <h2 class="blue" id="liquid-staking-tokens">liquid staking tokens</h2>
        <p>When you stake a token on a PoS blockchain, you earn validator rewards creating a yield on your holdings. Liquid staking tokens outsource the technical staking requirements to a 3rd party giving users a simple ERC20 token which represents a staked position.</p>
        <p>Liquid staking tokens represent your staked assets and any potential rewards you may earn. Tthese tokens aren't locked; they're liquid, meaning they can be traded, swapped, bridged or used in various DeFi protocols for other activities like lending, borrowing, or providing liquidity in decentralized exchanges (DEXs).</p>
        <p>mETH is a index token creating a cross chain wrapper for various liquid staking tokens.</p>
        <hr style="width: 50%; margin: 30px auto;">
        <h2 class="blue" id="tokenized-assets">tokenized assets</h2>
        <p>mETH is an ERC20 token with some additional functionality.</p>
        <ul>
            <li>The deposit function allows a user to send stETH & rETG and mint an equivalent amount of mETH in return</li>
            <li>The withdraw function allows a user to redeem mETH in exchange for their stETH & rETH</li>
            <li>The stake function allows a user to commit mETH to the staking pool to earn rewards</li>
            <li>The unstake function releases the mETH and collects the rewards</li>
        </ul>
      </div>
      <div style="text-align: center;">
        <div style="padding: 2% 0 1% 0;">built on the lego bricks of DeFi</div>
      </div>
      <div style="text-align: center;">
        <a href="#top">back to top</a>
      </div>
      <div style="height: 200px;"></div>
    </div>
    
    <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>
    <script>
      const provider = new ethers.providers.Web3Provider(window.ethereum,'any');
      let signer;
      let userAddress;
      let stEth;
      let rEth;
      let mEthMainnet;
      let mEthAurora;
      const mEthAbi = [
        "function balanceOf(address) view returns (uint256)",
        "function deposit(uint256 amount)",
        "function withdraw(uint256 amount)",
        "function bridge(uint256 amount, uint16 _targetChain) payable",
        "function transfer(address recipient, uint256 amount) external returns (bool)",
        "function allowance(address owner, address spender) external view returns (uint256)",
        "function approve(address spender, uint256 amount) external returns (bool)",
        "function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)",
      ];

      const stEthAddress = '0x66E7595fda2C65c97Bdf7d91aDDC46c9632EE280';
      const rEthAddress = '0x3268913ffAdEF87F55F49a0A04D927feC7A8d0A7';
      const mEthAddressMainnet = '0xec335ee750e71Ffe812EA9c95E83307a4d6018Dc';
      const mEthAddressAurora = '0xF9cdcE0d62933e2eE625a411888b68C632623A15';
      
      const updateBalances = async () => {
        const ethBalance = await provider.getBalance(userAddress);
        document.getElementById('eth-balance').innerHTML = Number(ethers.utils.formatEther(ethBalance)).toFixed(5) + '<span style="font-size: 0.8em;">ETH</span>';
        const mEthBalance = await mEthMainnet.balanceOf(userAddress);
        document.getElementById('meth-balance').innerHTML = Number(ethers.utils.formatEther(mEthBalance)).toFixed(2) + '<span style="font-size: 0.8em;">mETH</span>';
        const stEthBalance = await stEth.balanceOf(userAddress);
        document.getElementById('steth-balance').innerHTML = Number(ethers.utils.formatEther(stEthBalance)).toFixed(2) + '<span style="font-size: 0.8em;">stETH</span>';
        const rEthBalance = await stEth.balanceOf(userAddress);
        document.getElementById('reth-balance').innerHTML = Number(ethers.utils.formatEther(rEthBalance)).toFixed(2) + '<span style="font-size: 0.8em;">rETH</span>';
        const mEthABalance = await mEthAurora.balanceOf(userAddress);
        document.getElementById('metha-balance').innerHTML = Number(ethers.utils.formatEther(mEthABalance)).toFixed(2) + '<span style="font-size: 0.8em;">mETH</span>';
      }

      const connect = async () => {
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner()
        stEth = new ethers.Contract(stEthAddress, mEthAbi, signer);
        rEth = new ethers.Contract(rEthAddress, mEthAbi, signer);
        mEthMainnet = new ethers.Contract(mEthAddressMainnet, mEthAbi, signer);
        mEthAurora = new ethers.Contract(mEthAddressAurora, mEthAbi, signer);
        userAddress = await signer.getAddress();
        const { chainId } = await provider.getNetwork()
        if (chainId !== 5) alert('Please set your network to Goerli Testnet');
        document.querySelectorAll('.wallet-address').forEach(el => el.innerHTML = userAddress.substr(0,8) + '...');
        document.getElementById('connect').innerHTML = 'CONNECTED';
        window.ethereum.on('accountsChanged', () => { connect() });
        window.ethereum.on('network', () => { connect() });
        await updateBalances();
      }
      document.getElementById('connect').onclick = connect;

      document.getElementById('deposit').onclick = async () => {
        if (!mEthMainnet) await connect();
        let userAmount = document.getElementById('deposit-amount').value;
        if (!userAmount) userAmount = prompt('Enter an amount to deposit in ETH');
        const weiAmount = ethers.utils.parseEther(userAmount);
        document.getElementById('deposit-amount').value = '';
        document.getElementById('deposit').innerHTML = 'TX 1/3';
        const tx1 = await stEth.approve(mEthAddressMainnet, weiAmount);
        const receipt1 = await tx1.wait();
        document.getElementById('deposit').innerHTML = 'TX 2/3';
        const tx2 = await rEth.approve(mEthAddressMainnet, weiAmount);
        const receipt2 = await tx2.wait();
        document.getElementById('deposit').innerHTML = 'TX 3/3';
        const tx3 = await mEthMainnet.deposit(weiAmount);
        const receipt3 = await tx3.wait();
        document.getElementById('deposit').innerHTML = 'DEPOSIT';
        await updateBalances();
      }

      document.getElementById('withdraw').onclick = async () => {
        if (!mEthMainnet) await connect();
        let userAmount = document.getElementById('withdraw-amount').value;
        if (!userAmount) userAmount = prompt('Enter an amount to withdraw in mETH');
        const weiAmount = ethers.utils.parseEther(userAmount);
        document.getElementById('withdraw-amount').value = '';
        document.getElementById('withdraw').innerHTML = 'TX 1/1';
        const tx1 = await mEthMainnet.withdraw(weiAmount);
        const receipt1 = await tx1.wait();
        document.getElementById('withdraw').innerHTML = 'WITHDRAW';
        await updateBalances();
      }

      document.getElementById('bridge').onclick = async () => {
        if (!mEthMainnet) await connect();
        let userAmount = document.getElementById('bridge-amount').value;
        if (!userAmount) userAmount = prompt('Enter an amount to bridge in mETH');
        const weiAmount = ethers.utils.parseEther(userAmount);
        document.getElementById('bridge-amount').value = '';
        document.getElementById('bridge').innerHTML = 'TX 1/2';
        const tx1 = await mEthMainnet.approve(mEthAddressMainnet, weiAmount);
        const receipt1 = await tx1.wait();
        document.getElementById('bridge').innerHTML = 'TX 2/2';
        const fee = ethers.utils.parseEther('0.1'); // 2do optimize
        const tx3 = await mEthMainnet.bridge(weiAmount, 9, {value: fee}); //chain id 9 == aurora
        document.getElementById('bridge').innerHTML = 'WITHDRAW';
        await updateBalances();
      }


    </script>

`;

return (
  <div
    style={{
      background: "#000",
      width: "100% ",
      height: "100%",
      "min-height": "800px",
    }}
  >
    <iframe
      style={{
        width: "100% ",
        height: "100%",
        "min-height": "800px",
      }}
      srcDoc={code}
    />
  </div>
);
