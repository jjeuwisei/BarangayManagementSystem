const residentForm = document.getElementById("residentForm");
const residentIdInput = document.getElementById("residentId");
const residentResult = document.getElementById("residentResult");

residentForm.addEventListener("submit", async (event) => 
  {
    event.preventDefault();
    const id = residentIdInput.value;

    try
    {
      const response = await fetch(`/api/residents/${id}`);

      const resident = await response.json();
      if(!response.ok)
      {
        residentResult.textContent = resident.message;
        return;
      }
      residentResult.textContent = `${resident.firstName} ${resident.lastName} (ID: ${resident.id})`;
    }
    catch(error)
    {
      console.error("request failed:", error);
      residentResult.textContent = "unable to connect to the server";
    }
  });
