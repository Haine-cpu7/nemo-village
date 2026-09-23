// Nemo Village v0.5 — Reown AppKit / WalletConnect
// Project ID is public by design and is safe to embed in a web app.
const PROJECT_ID = "bc4fb84cf29ce3b36d4aa36e037fe905";

function emit(name, detail) {
  window.dispatchEvent(new CustomEvent(name, { detail }));
}

try {
  const appkit = await import(
    "https://cdn.jsdelivr.net/npm/@reown/appkit-cdn@1.8.24/dist/appkit.js"
  );

  const wagmi = await import(
    "https://esm.sh/@wagmi/core@2.x"
  );

  const { WagmiAdapter, createAppKit, networks } = appkit;
  const { reconnect, watchConnectors } = wagmi;

  const appKitNetworks = [networks.polygon];

  const wagmiAdapter = new WagmiAdapter({
    networks: appKitNetworks,
    projectId: PROJECT_ID
  });

  const modal = createAppKit({
    adapters: [wagmiAdapter],
    networks: appKitNetworks,
    defaultNetwork: networks.polygon,
    projectId: PROJECT_ID,
    themeMode: "light",
    metadata: {
      name: "ねもの村",
      description: "Nemo2023の179体がのんびり暮らしている村",
      url: window.location.origin,
      icons: []
    },
    features: {
      analytics: false,
      email: false,
      socials: false,
      swaps: false
    },
    themeVariables: {
      "--apkt-accent": "#9b7f67",
      "--apkt-border-radius-master": "2px"
    }
  });

  // Helps extension wallets reconnect after refresh.
  watchConnectors(wagmiAdapter.wagmiConfig, {
    onChange(connectors) {
      if (connectors.length > 4) {
        reconnect(wagmiAdapter.wagmiConfig).catch(() => {});
      }
    }
  });

  window.NemoWalletConnect = {
    open: () => modal.open(),
    disconnect: () => modal.disconnect()
  };

  modal.subscribeAccount(state => {
    emit("nemo-wallet-account", {
      address: state?.address || null,
      isConnected: !!state?.isConnected,
      status: state?.status || null
    });
  }, "eip155");

  emit("nemo-wallet-ready", {
    projectId: PROJECT_ID,
    network: "polygon"
  });

} catch (error) {
  console.error("Reown AppKit failed to load", error);
  emit("nemo-wallet-error", String(error?.message || error || "Unknown AppKit error"));
}
