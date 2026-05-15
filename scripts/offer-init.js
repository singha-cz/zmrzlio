$(function () {
  $("#dataTable").DataTable({
    responsive: {
      details: {
        type: "column",
        target: "tr",
      },
    },
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.13.7/i18n/cs.json",
      searchPlaceholder: "Zadejte hledaný výraz...",
      lengthMenu: "Zobrazit na stránce: _MENU_",
      search: "Vyhledat:",
      info: "Zobrazeno _START_ až _END_ z _TOTAL_ záznamů",
      infoEmpty: "Žádné záznamy",
      infoFiltered: "(filtrováno z _MAX_ celkem)",
      paginate: {
        first: "První",
        last: "Poslední",
        next: "Další",
        previous: "Předchozí",
      },
    },
    pageLength: 10,
    lengthMenu: [5, 10, 25, 50],
    order: [[1, "asc"]],
    columnDefs: [
      { orderable: false, targets: [0] },
      { className: "text-nowrap", targets: [3] },
      { responsivePriority: 1, targets: [1] },
      { responsivePriority: 2, targets: [3] },
      { responsivePriority: 3, targets: [0] },
      { responsivePriority: 4, targets: [4] },
      { responsivePriority: 5, targets: [2] },
    ],
  });
});
