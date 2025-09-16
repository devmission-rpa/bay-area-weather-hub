document.addEventListener("DOMContentLoaded", () => {
  const apiKey =
    "Bearer patEv5d77ffFIExTs.44105b330801257ecf08625553657e729000515c1bb8e6118454d9a2816b9a8c";
  const baseUrl =
    "https://api.airtable.com/v0/appDWduOrgfivtRTS/Natural%20Disasters";

  const container = document.getElementById("naturalDisasters");

  fetch(baseUrl, {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.records.forEach((record) => {
        const { fields } = record;

        let imageUrl = "";
        switch (fields["Natural Disaster"]) {
          case "Earthquakes":
            imageUrl =
              "https://cdn.vox-cdn.com/thumbor/Qb0UViOQ0IH2c9r9F2h9tW_zBo4=/0x294:2964x1846/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19260124/AP_647783482670.jpg";
            break;
          case "Storms and Flooding":
            imageUrl =
              "https://s.hdnux.com/photos/01/30/76/51/23325263/15/1920x0.jpg";
            break;
          case "Landslides":
            imageUrl =
              "https://cdn.abcotvs.com/dip/images/6843759_100720-kgo-ap-file-sausalito-mudslide-img.jpg";
            break;
          case "Extreme Heat":
            imageUrl =
              "https://cdn.kqed.org/wp-content/uploads/sites/10/2024/09/GettyImages-2175344883-1020x680.jpg";
            break;
          case "Wildfires":
            imageUrl =
              "https://image.cnbcfm.com/api/v1/image/106695701-1599664926959-gettyimages-1228423382-AFP_8PL8JF.jpeg?v=1599664969";
            break;
          case "Tsunamis":
            imageUrl =
              "https://s.hdnux.com/photos/01/23/50/05/21922172/4/1920x0.jpg";
            break;
          default:
            imageUrl = "https://via.placeholder.com/150";
        }

        const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
          <div class="card h-100">
            <img src="${imageUrl}" class="card-img-top" alt="${
          fields["Natural Disaster"]
        }" />
            <div class="card-body">
              <h5 class="card-title">${fields["Natural Disaster"]}</h5>
              <p class="card-text">${
                fields.Description || "No Description Available..."
              }</p>
              <p class="card-text"><strong>Precautions:</strong> ${
                fields.Precautions || "N/A"
              }</p>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      container.innerHTML = "<p>Error loading natural disasters data.</p>";
    });
});
