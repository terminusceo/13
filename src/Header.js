import React from 'react';
import * as s from './styles/globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from './redux/blockchain/blockchainActions';

function Header() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);

    return (
        <s.Header>
            <s.Logo src="/logo32.png" alt="Logo" />
            <s.HeaderLinks>
                <s.CustomLink exact to="/" activeClassName="active">Home</s.CustomLink>
                <s.CustomLink to="/mint" activeClassName="active">Mint</s.CustomLink>
            </s.HeaderLinks>
            {blockchain.account ? (
                <s.WalletAddress>{blockchain.account}</s.WalletAddress>
            ) : (
                <s.WalletButton onClick={() => dispatch(connect())}>Connect Wallet</s.WalletButton>
            )}
        </s.Header>
    );
}

export default Header;

