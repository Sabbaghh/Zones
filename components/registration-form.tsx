// --- registration-form.tsx

'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

interface FormData {
  fullName: string;
  company: string;
  email: string;
}

interface FormErrors {
  fullName?: string;
  company?: string;
  email?: string;
}

interface TouchedFields {
  fullName: boolean;
  company: boolean;
  email: boolean;
}

export default function RegistrationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    email: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState(false);
  const [touchedFields, setTouchedFields] = useState<TouchedFields>({
    fullName: false,
    company: false,
    email: false,
  });
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check for existing UUID in cookies on mount
  useEffect(() => {
    const uuid = Cookies.get('uuid');
    if (uuid) {
      router.push(`/badges`);
    }
  }, [router]);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
      const error = validateField(key, formData[key as keyof FormData]);
      // Only show error if field has been touched or form submission was attempted
      if (
        error &&
        (touchedFields[key as keyof TouchedFields] || hasAttemptedSubmit)
      ) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);
    setIsValid(
      Object.keys(validateAllFields()).length === 0 &&
        formData.fullName.trim() !== '' &&
        formData.company.trim() !== '' &&
        formData.email.trim() !== '',
    );
  }, [formData, touchedFields, hasAttemptedSubmit]);

  const validateAllFields = (): FormErrors => {
    const allErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        allErrors[key as keyof FormErrors] = error;
      }
    });
    return allErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);

    const allErrors = validateAllFields();
    if (Object.keys(allErrors).length === 0) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          'https://zonecheck.up.railway.app/api/register',
          {
            name: formData.fullName,
            email: formData.email,
            company: formData.company,
          },
        );
        const data = response.data.data;
        if (data.uuid) {
          Cookies.set('uuid', data.uuid, { expires: 7 });
          router.push(`/badges/${data.uuid}`);
        }
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    } else {
      // Show all errors when form is submitted with invalid data
      setErrors(allErrors);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-lg mx-auto border border-white/20 relative">
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-3xl z-20">
          <div className="text-white text-xl">Loading...</div>
        </div>
      )}
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

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!isValid || isLoading}
          className={`w-full py-3 rounded-full font-semibold text-lg transition-all duration-200 ${
            isValid && !isLoading
              ? 'bg-green-400 hover:bg-green-500 text-black'
              : 'bg-gray-400 text-gray-600 cursor-not-allowed'
          }`}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
}
