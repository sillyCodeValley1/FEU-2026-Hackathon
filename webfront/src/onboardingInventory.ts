document.getElementById("addMaterial")?.addEventListener("click", () => {
	const fieldset = document.getElementById("partsList");
	if (!fieldset) return;

	// Check if the last row's inputs have any content
	const existingRows = fieldset.querySelectorAll(".row");
	if (existingRows.length > 0) {
		showError("Fields are empty");
		const lastRow = existingRows[existingRows.length - 1];
		const inputs = lastRow.querySelectorAll("input");
		const hasContent = Array.from(inputs).some(
			(input) => input.value.trim() !== "",
		);
		if (!hasContent) return;
	}

	const row = document.createElement("div");
	row.innerHTML = `
    <div class="row">
      <div class="max">
        <div class="field label prefix border">
          <i>search</i>
          <input type="text" />
          <label>Part Name</label>
        </div>
      </div>
      <div class="max">
        <div class="field border label">
          <input type="number" />
          <label>Quantity</label>
        </div>
      </div>
    </div>
  `;

	fieldset.appendChild(row.firstElementChild!);
});
