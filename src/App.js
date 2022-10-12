import "./App.css";

// export const thi ten doi tuong phai nam trong {}
// export default thi ten doi tuong khong nam trong {}

function App() {
  function demo() {
    document.title = "Duong Tan Huy";
  }
  demo();

  function componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://use.typekit.net/foobar.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    console.log("ok");
  }

  componentDidMount();

  let account = "";
  const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      account = accounts[0];
      document.getElementById("accountArea").value = account;
    }
  };

  //2-connect to smart contract
  const connectContract = async () => {
    const ABI = [
      {
        inputs: [],
        name: "auctionEnd",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "bid",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_biddingTime",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "_beneficiary",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "winner",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "auctionEnded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "bidder",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "highestBidIncrease",
        type: "event",
      },
      {
        inputs: [],
        name: "withdraw",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "auctionEndTime",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "beneficiary",
        outputs: [
          {
            internalType: "address payable",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "highestBid",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "highestBidder",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "pendingReturns",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ];
    const Address = "0x4Cf202819ba94F39Ab92BAF65dc2Cf68A9675109";
    window.web3 = await new web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    document.getElementById("contractArea").value =
      "connected to Smart Contract";
  };

  //3 read data from smart contract
  const readContract = async () => {
    const beneficiary =
      (await window.contract.methods.beneficiary().call()) || "";
    const highestBid =
      (await window.contract.methods.highestBid().call()) || "";
    const highestBidder =
      (await window.contract.methods.highestBidder().call()) || "";
    document.getElementById("dataBeneficiary").value = beneficiary;
    document.getElementById("datahighestBid").value = highestBid;
    document.getElementById("datahighestBidder").value = highestBidder;
  };

  return (
    <div className="root">
      <div style={{ position: "relative" }}>
        <a content="Connect to Metamask" onClick={connectMetamask()} href>
          Metamask
        </a>
        <input placeholder="Account area..." id="accountArea"></input>
      </div>
      <div style={{ position: "relative" }}>
        <a content="Connect to contract" onclick={connectContract()} href>
          Contract
        </a>
        <input placeholder="Contract area..." id="contractArea"></input>
      </div>
      <div style={{ position: "relative" }}>
        <a content="Get data from contract" onclick={readContract()} href>
          Get data
        </a>
        <input placeholder="Data area..." id="dataBeneficiary"></input>
        <input placeholder="Data highest bid..." id="datahighestBid"></input>
        <input
          placeholder="Data highest bidder..."
          id="datahighestBidder"
        ></input>
      </div>
    </div>
  );
}

export default App;