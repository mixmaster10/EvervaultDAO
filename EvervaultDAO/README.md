# How to deploy Contracts

1. Deploy `Eve` and Mint many Eves.
2. Deploy `Loot`
3. Deploy `EveStaking(EveAddress, LootAddress, 28800, 1, endTime)`
4. Call `Loot > initialize(EveStakingAddress)` and Call `Loot > SetIndex(1)`
5. Deploy `StakingWarmup(EveStakingAddress, LootAddress)`
6. Deploy `EveTreasury(EveAddress, BUSDAddress, 0)`
7. Deploy `Distributor(EveTreasuryAddress, EveAddress, 28800, endTime)`
8. Deploy `StakingHelper(EveStakingAddress, EveAddress)`
9. Deploy `MultiSigWalletWithDailyLimit(ownersArray, required, dailyLimit)`
10. Deploy `EveBondingCalculator(EveAddress)`
11. Add Usdt-Eve LP Pair in Pancakeswap and take address
12. Deploy `BUSDBond(Eve, BUSDAddress, Trasury, DAO, "")`
13. Deploy `BondDepository(Eve, LPPairAddress, Trasury, DAO, Calculator)` for USDT-EVE
14. Run `BusdBond > initializeBondTerms(0, 0, 75, 10000, 16000000000000000000000000, 0, 432000)`
    And `BusdBond > setAdjustment(false, 0, 178, 2160)`
    And `BusdBond > setStaking(EveStakingAddress, false)`
    And `BusdBond > setStaking(StakingHelperAddress, true)`
    After first mint then set terms to 178
    Do same for USDT Bond
15. Run `UsdtEveBond > InitializeBondTerms(111, 0, 75, 10000, 2000000000000000000000000, 0, 432000)`
    And `UsdtEveBond > setAdjustment(false, 0, 111, 3600)`
16. Run `EveStaking > setContract(0, DistributorAddress)` and `EveStaking > setContract(1, StakingWarmupAddress)`
17. Run `Eve > setVault(TreasuryAddress)`
18. Run `EveTreasury > queue(0, BUSDBondAddress)` and `EveTreasury > toggle(0, BusdBondAddress)`
    And Run `EveTreasury > queue(0, UsdtEveBond)` and `EveTreasury > toggle(0, UsdtEveBond)`
19. Run `EveTreasury > queue(4, UsdtEveBond)` and `EveTreasury > toggle(4, UsdtEveBond)`
20. Run `EveTreasury > queue(5, Usdt-Eve Pair Address)` and `EveTreasury > toggle(5, Usdt-Eve Pair Address, EveBondingCalculatorAddress)`
21. Run `EveTreasury > queue(8, DistributorAddress)` and `EveTreasury > toggle(8, DistributorAddress)`
22. Run `Distributor > addRecipient(EveStakingAddress, rate)`
    EveTreasury > toggle
    Distributor > addRecipient

# Information seen on screens

-   ## Dashboard

    -   ### EVE Price

        Means MarketPrice of EVE
        From USDT-EVE LP Lp token
        Get count ratio regarding USDT and multiply USDT token price

    -   ### Market Cap

        (MarketPrice of EVE) \* (totalSupply of EVE)

    -   ### TVL

        (MarketPrice of EVE) \* (amount of EVE which is can be returned to users as staking rewards from LOOT)

    -   ### APY

        Math.pow(1 + rebased EVE amount / EVE for stake rewards, 365 \* 3) - 1;

    -   ### Current Index

            Means an increased LOOT amount compared to the standard amount (1) set before.

    -   ### Treasury Balance

            Means total $ amount of treasury assets bonded from Bonding
            1. Stable Coin
                Just get amount
            2. Other token
                Amount * Price of token
            3. EVE-StableCoin LP Token
                (LP / Total LP) * 2sqrt(Constant Product) * (Markdown of EVE-StableCoin LP Token)
            4. EVE-OtherToken LP Token
                (LP / Total LP) * 2sqrt(Constant Product) * (Markdown of EVE-StableCoin LP Token) * (OtherToken Price)

    -   ### Backing per $EVE

            (Reserve Coin Asset + LP Bond Asset) / (Eve Amount in LP)

    -   ### Runway

            (3 * (1 + APY)) ^ Runway = (Reserve Coin Asset + LP Bond Asset) / (amount of EVE which is can be returned to users as staking rewards from LOOT)

-   ## Stake
        1. How does Staking Work
            - Per every rebases, Distributor Contract mints rewards for selected recipients and Staking Contract is one of that.
              For example, when the rate of the Staking Contract is 0.45%, the EVE amount in Staking Contract is increased by 0.45% per every rebases.
        2. Means of Statistics
            - APY
                Math.pow(1 + rebased EVE amount / EVE for stake rewards, 365 \* 3) - 1;
            - TVL
                (MarketPrice of EVE) \* (amount of EVE which is can be returned to users as staking rewards from LOOT)
            - Current Index
                Means an increased LOOT amount compared to the standard amount (1) set before.
            - Your Balance
                Amount of EVE in your wallet, which is not staked yet.
            - Your Staked Balance
                Amount of EVE which can be reedeemed now
            - Next Reward Amount
                Shows how many EVEs are increased for you in next rebase
            - Next Reward Yield
                Next Reward Amount / Your Staked Balance * 100 (%)
            - ROI(5-Day Rate)
                Math.pow(1 + rebased EVE amount / EVE for stake rewards, 365 \* 3) - 1;
    ## Mint
        1. Parameters Meaning
            - Price of bond
                Get Dollar Bond Price from Smart Contracts.
                - Stable Token (USDT)
                    1 + controlVariable * (locked EVE amount for bonders) / (totalSupply of EVE)
                - Nonstale Reserve Token
                    (Stable Token Bond Price) * (marketPrice of NonStable Reserve Token)
                - StableToken-EVE LP Token
                    a * b = k, here b is EVE.
                    (1 + controlVariable * (locked EVE amount for bonders)) * (a * 2 / sqrt(k)))
                - NonStableToken-EVE LP Token
                    a * b = k, here b is EVE.
                    Marketprice of NonStableToken * (1 + controlVariable * (locked EVE amount for bonders)) * (a * 2 / sqrt(k)))
            - ROI
                Discount Rate; (marketPrice - bondPrice) / bondPrice
            - Purchased
                Get Dollar Price of assets in Treasury
                - Stable Token (USDT)
                    same as amount
                - Nonstale Reserve Token
                    (Stable Token Bond Price) * (amount)
                - StableToken-EVE LP Token
                    a * b = k, here b is EVE.
                    (1 + controlVariable * (locked EVE amount for bonders)) * (a * 2 / sqrt(k)))
                - NonStableToken-EVE LP Token
                    a * b = k, here b is EVE.
                    Marketprice of NonStableToken * (1 + controlVariable * (locked EVE amount for bonders)) * (a * 2 / sqrt(k)))
                - StableToken-EVE LP Token
                    a * b = k; b is EVE
                    (Amount in Treasury) * 2 * a / (totalSupply of LP)
                - NonStableToken-EVE LP Token
                    a * b = k; b is EVE
                    (MarketPrice of NonStableToken) * (Amount in Treasury) * 2 * a / (totalSupply of LP)
        2. How does Bonding work
            - First bonders click Mint Button
            - Then assets goes to following BondDepositoryContract.
            - Get count of EVEs from assets and bondPrices to return.
              Original EVEs count are calculated and the difference between them can afford fee to DAOs/
