document.addEventListener("DOMContentLoaded", () => {
  const survivalKits = [
    {
      title: "Non-perishable food and Water",
      description:
        "Include at least a 3-day supply of food and water for each person.",
    },
    {
      title: "A first-aid kit",
      description: "Basic medical supplies for emergencies.",
    },
    {
      title: "Battery-powered radio",
      description: "To receive updates during power outages.",
    },
    {
      title: "Flashlight and extra batteries",
      description: "Essential for visibility in low light or power outages.",
    },
    {
      title: "Communication devices",
      description:
        "Cell phone with backup power or satellite phone if possible.",
    },
    {
      title: "Important medications",
      description: "Any prescription medications needed regularly.",
    },
    {
      title: "Whistle",
      description: "Useful for signaling for help in emergencies.",
    },
    {
      title: "Clothes",
      description:
        "Warm clothing, preferably waterproof for extreme conditions.",
    },
    {
      title: "Sleeping bags and blankets",
      description: "For warmth and comfort in case of evacuation.",
    },
    {
      title: "Sanitation products",
      description: "Hand sanitizer, wipes, and other hygiene products.",
    },
  ];

  const container = document.getElementById("survivalKits");

  survivalKits.forEach((kit) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${kit.title}</h5>
          <p class="card-text">${kit.description}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
});
