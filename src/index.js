import useScript from "./useScript";

const DEFAULT_SDK_URL =
  "https://d1f8f9xcsvx3ha.cloudfront.net/sbl/0.7.6/fastspring-builder.min.js";

function useFastspring({
  accessKey,
  storefront,
  onPopupClose,
  sdkUrl = DEFAULT_SDK_URL
}) {
  const [loaded] = useScript(sdkUrl, {
    "data-access-key": accessKey,
    "data-popup-closed": "onFSPopupClosed",
    "data-storefront": storefront,
    id: "fsc-api",
    type: "text/javascript"
  });

  const fastspring = window.fastspring;

  if (onPopupClose) {
    window.onFSPopupClosed = onPopupClose;
  }

  return { loaded, fastspring };
}

export default useFastspring;
