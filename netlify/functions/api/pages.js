// This file is purely to allow nft to know about these pages. It should be temporary.
exports.resolvePages = () => {
    try {
        require.resolve('../../../.next/server/pages/api/annotations.js')
    } catch {}
}