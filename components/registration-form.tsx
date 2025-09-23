'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import countryCodes from '@/data/countrycodes';
// Country codes for phone validation

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
}

interface FormErrors {
  fullName?: string;
  company?: string;
  email?: string;
  phoneNumber?: string;
}

interface TouchedFields {
  fullName: boolean;
  company: boolean;
  email: boolean;
  phoneNumber: boolean;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    email: '',
    phoneNumber: '',
    countryCode: '+971', // Default to UAE
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState(false);
  const [touchedFields, setTouchedFields] = useState<TouchedFields>({
    fullName: false,
    company: false,
    email: false,
    phoneNumber: false,
  });
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Phone number validation (basic - digits only, 7-15 characters)
  const phoneRegex = /^\d{7,15}$/;

  // Validate individual fields
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2)
          return 'Full name must be at least 2 characters';
        return undefined;

      case 'company':
        if (!value.trim()) return 'Company is required';
        if (value.trim().length < 2)
          return 'Company name must be at least 2 characters';
        return undefined;

      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!emailRegex.test(value))
          return 'Please enter a valid email address';
        return undefined;

      case 'phoneNumber':
        if (!value.trim()) return 'Phone number is required';
        if (!phoneRegex.test(value.replace(/\s/g, '')))
          return 'Please enter a valid phone number';
        return undefined;

      default:
        return undefined;
    }
  };

  // Handle input changes
  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFieldBlur = (name: string) => {
    setTouchedFields((prev) => ({ ...prev, [name]: true }));

    // Validate this field on blur
    const error = validateField(name, formData[name as keyof FormData]);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  useEffect(() => {
    const newErrors: FormErrors = {};

    // Validate all fields
    Object.keys(formData).forEach((key) => {
      if (key !== 'countryCode') {
        const error = validateField(key, formData[key as keyof FormData]);
        // Only show error if field has been touched or form submission was attempted
        if (
          error &&
          (touchedFields[key as keyof TouchedFields] || hasAttemptedSubmit)
        ) {
          newErrors[key as keyof FormErrors] = error;
        }
      }
    });

    setErrors(newErrors);
    setIsValid(
      Object.keys(validateAllFields()).length === 0 &&
        formData.fullName.trim() !== '' &&
        formData.company.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.phoneNumber.trim() !== '',
    );
  }, [formData, touchedFields, hasAttemptedSubmit]);

  const validateAllFields = (): FormErrors => {
    const allErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== 'countryCode') {
        const error = validateField(key, formData[key as keyof FormData]);
        if (error) {
          allErrors[key as keyof FormErrors] = error;
        }
      }
    });
    return allErrors;
  };

  // Auto-detect country code based on phone number
  const detectCountryFromPhone = (phoneNumber: string) => {
    const cleanPhone = phoneNumber.replace(/\D/g, '');

    // Check for common country code patterns
    for (const country of countryCodes) {
      const code = country.code.replace('+', '');
      if (cleanPhone.startsWith(code)) {
        return country.code;
      }
    }

    return formData.countryCode; // Keep current if no match
  };

  // Handle phone number input with auto country detection
  const handlePhoneChange = (value: string) => {
    const detectedCountry = detectCountryFromPhone(value);
    if (detectedCountry !== formData.countryCode) {
      setFormData((prev) => ({ ...prev, countryCode: detectedCountry }));
    }
    handleInputChange('phoneNumber', value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);

    const allErrors = validateAllFields();
    if (Object.keys(allErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Handle form submission here
      alert('Registration submitted successfully!');
    } else {
      // Show all errors when form is submitted with invalid data
      setErrors(allErrors);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-lg mx-auto border border-white/20">
      <div className="mb-8">
        <h3 className="text-white text-2xl font-bold mb-2">Registration</h3>
        <div className="w-12 h-1 bg-green-400 rounded"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <Label
            htmlFor="fullName"
            className="text-green-400 font-medium mb-2 block"
          >
            Full Name
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Please enter your full name"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            onBlur={() => handleFieldBlur('fullName')}
            className={`bg-white/90 border-0 rounded-lg px-4 py-3 text-gray-800 placeholder:text-gray-500 ${
              errors.fullName ? 'ring-2 ring-red-400' : ''
            }`}
          />
          {errors.fullName && (
            <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <Label
            htmlFor="company"
            className="text-green-400 font-medium mb-2 block"
          >
            Company
          </Label>
          <Input
            id="company"
            type="text"
            placeholder="Company name"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            onBlur={() => handleFieldBlur('company')}
            className={`bg-white/90 border-0 rounded-lg px-4 py-3 text-gray-800 placeholder:text-gray-500 ${
              errors.company ? 'ring-2 ring-red-400' : ''
            }`}
          />
          {errors.company && (
            <p className="text-red-400 text-sm mt-1">{errors.company}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label
            htmlFor="email"
            className="text-green-400 font-medium mb-2 block"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onBlur={() => handleFieldBlur('email')}
            className={`bg-white/90 border-0 rounded-lg px-4 py-3 text-gray-800 placeholder:text-gray-500 ${
              errors.email ? 'ring-2 ring-red-400' : ''
            }`}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <Label
            htmlFor="phoneNumber"
            className="text-green-400 font-medium mb-2 block"
          >
            Phone number
          </Label>
          <div className="flex gap-2">
            <Select
              value={formData.countryCode}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, countryCode: value }))
              }
            >
              <SelectTrigger className="w-24 bg-white/90 border-0 rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {countryCodes.map((country) => (
                  <SelectItem key={country.country} value={country.code}>
                    <span className="flex items-center gap-2">
                      <span>{country.flag}</span>
                      <span>{country.code}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Phone number..."
              value={formData.phoneNumber}
              onChange={(e) => handlePhoneChange(e.target.value)}
              onBlur={() => handleFieldBlur('phoneNumber')}
              className={`flex-1 bg-white/90 border-0 rounded-lg px-4 py-3 text-gray-800 placeholder:text-gray-500 ${
                errors.phoneNumber ? 'ring-2 ring-red-400' : ''
              }`}
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-red-400 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!isValid}
          className={`w-full py-3 rounded-full font-semibold text-lg transition-all duration-200 ${
            isValid
              ? 'bg-green-400 hover:bg-green-500 text-black'
              : 'bg-gray-400 text-gray-600 cursor-not-allowed'
          }`}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
