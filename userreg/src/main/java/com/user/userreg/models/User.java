package com.user.userreg.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String eFirstName;
	private String eLastName;
	private String eGender;
	private String eDepartment;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy")
	private Date edob;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String geteFirstName() {
		return eFirstName;
	}
	public void seteFirstName(String eFirstName) {
		this.eFirstName = eFirstName;
	}
	public String geteLastName() {
		return eLastName;
	}
	public void seteLastName(String eLastName) {
		this.eLastName = eLastName;
	}
	public String geteGender() {
		return eGender;
	}
	public void seteGender(String eGender) {
		this.eGender = eGender;
	}
	public String geteDepartment() {
		return eDepartment;
	}
	public void seteDepartment(String eDepartment) {
		this.eDepartment = eDepartment;
	}
	public Date geteDOB() {
		return edob;
	}
	public void seteDOB(Date edob) {
		this.edob = edob;
	}
	
}
