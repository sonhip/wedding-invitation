import { useMemo } from "react";

/**
 * Custom hook để lấy query parameters từ URL
 * @returns Object chứa các query params
 */
export const useQueryParams = () => {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParams: Record<string, string> = {};

    params.forEach((value, key) => {
      queryParams[key] = value;
    });

    return queryParams;
  }, []);
};

/**
 * Hook chuyên dụng để lấy tên người được mời
 * @returns Tên người được mời hoặc "Quý khách" nếu không có
 */
export const useGuestName = (): string => {
  const params = useQueryParams();
  return params.name || params.guest || "Quý khách";
};
