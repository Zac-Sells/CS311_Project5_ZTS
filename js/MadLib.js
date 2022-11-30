function HideFillSheet(){
    const fill1 = document.getElementById("FillInSheetCOl1");
    fill1.style.display = 'none';
    const fill2 = document.getElementById("FillInSheetCOl2");
    fill2.style.display = 'none';
    const head1 = document.getElementById("FISC1Heading");
    head1.style.display = 'none';
    const head2 = document.getElementById("FISC2Heading");
    head2.style.display = 'none';
    const Lib = document.getElementById("Lib");
    Lib.style.display = 'block';
}

function Reset(){
    const fill1 = document.getElementById("FillInSheetCOl1");
    fill1.style.display = 'block';
    const fill2 = document.getElementById("FillInSheetCOl2");
    fill2.style.display = 'block';
    const head1 = document.getElementById("FISC1Heading");
    head1.style.display = 'block';
    const head2 = document.getElementById("FISC2Heading");
    head2.style.display = 'block';
    const Lib = document.getElementById("Lib");
    Lib.style.display = 'none';
}

const data = document.getElementById("Name1");
text = document.createTextNode(data.value)
    