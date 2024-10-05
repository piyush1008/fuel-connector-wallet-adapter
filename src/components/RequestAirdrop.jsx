import {
    useAccount,
    useAccounts,
    useAddNetwork,
    useDisconnect,
    useFuel,
    useNetwork,
    useNetworks,
    useSelectNetwork,
    useWallet,
  } from '@fuels/react';
import { useState } from 'react';
export default function RequestAirDrop(){
    const {account}=useAccount();
    const [amount, setAmount]=useState("");
    const {fuel}=useFuel();
    const {wallet}=useWallet();
    const requestAirdrop=()=>{
        if(!account || !wallet){
            return;
        }
        const amount=100; //solana amount
        const txn=wallet.createAirdrop(account, amount);
        fuel.sendTransaction(account, txn);
        console.log('Airdrop request sent');
    }
    return(
        <div>
            <div>
                Account selected : {account}
            </div>
            <input type="text" onChange={(e)=>{
                setAmount(e.target.value);
            }}placeholder='Enter the amount of sol' />
            <button onClick={requestAirdrop}>RequestAirDrop</button>
        </div>
    )
}