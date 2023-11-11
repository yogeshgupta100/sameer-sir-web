export default function useMultiRefs(initialValue) {
	let currentRefs = [];
	let refs = new Set(currentRefs);

	function getRefs() {
		if (initialValue && refs.size === 0) {
			return initialValue;
		}

        return Array.from(refs).filter((ref) => {
            return document.contains(ref);
        });
	}
    
	function addRef(ref) {
		if (ref !== null) {
			refs.add(ref);
		}
	}
	return [getRefs, addRef];
}
