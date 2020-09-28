package backend;

public class Aerodromes {
	private String name;
	private String city;
	private String description;
	private String createdAt;
	private Runways runways;
	
	public Aerodromes(String name, String city, String description, String createdAt) {
		this.name = name;
		this.city = city;
		this.description = description;
		this.createdAt = createdAt;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}

	public Runways getRunways() {
		return runways;
	}

	public void setRunways(Runways runways) {
		this.runways = runways;
	}
	
}
