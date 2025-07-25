export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      admin_settings: {
        Row: {
          created_at: string
          id: string
          setting_key: string
          setting_value: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          setting_key: string
          setting_value: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          setting_key?: string
          setting_value?: Json
          updated_at?: string
        }
        Relationships: []
      }
      ai_content_validation: {
        Row: {
          bias_flags: string[] | null
          created_at: string
          human_review_required: boolean
          id: string
          is_valid: boolean
          issues: string[] | null
          recommendations: string[] | null
          report_id: string
          review_notes: string | null
          reviewed_by: string | null
          updated_at: string
          validated_at: string
          validation_score: number
        }
        Insert: {
          bias_flags?: string[] | null
          created_at?: string
          human_review_required?: boolean
          id?: string
          is_valid?: boolean
          issues?: string[] | null
          recommendations?: string[] | null
          report_id: string
          review_notes?: string | null
          reviewed_by?: string | null
          updated_at?: string
          validated_at?: string
          validation_score?: number
        }
        Update: {
          bias_flags?: string[] | null
          created_at?: string
          human_review_required?: boolean
          id?: string
          is_valid?: boolean
          issues?: string[] | null
          recommendations?: string[] | null
          report_id?: string
          review_notes?: string | null
          reviewed_by?: string | null
          updated_at?: string
          validated_at?: string
          validation_score?: number
        }
        Relationships: []
      }
      analytics_events: {
        Row: {
          created_at: string | null
          entity_id: string | null
          entity_type: string | null
          event_type: string
          id: string
          metadata: Json | null
        }
        Insert: {
          created_at?: string | null
          entity_id?: string | null
          entity_type?: string | null
          event_type: string
          id?: string
          metadata?: Json | null
        }
        Update: {
          created_at?: string | null
          entity_id?: string | null
          entity_type?: string | null
          event_type?: string
          id?: string
          metadata?: Json | null
        }
        Relationships: []
      }
      api_rate_limits: {
        Row: {
          blocked_until: string | null
          created_at: string
          endpoint: string
          id: string
          identifier: string
          request_count: number
          window_start: string
        }
        Insert: {
          blocked_until?: string | null
          created_at?: string
          endpoint: string
          id?: string
          identifier: string
          request_count?: number
          window_start?: string
        }
        Update: {
          blocked_until?: string | null
          created_at?: string
          endpoint?: string
          id?: string
          identifier?: string
          request_count?: number
          window_start?: string
        }
        Relationships: []
      }
      assessment_demographics: {
        Row: {
          age_range: string | null
          assessment_result_id: string | null
          consent_for_research: boolean | null
          country: string | null
          created_at: string
          cultural_background: string | null
          disability_accommodations: boolean | null
          education_level: string | null
          gender: string | null
          id: string
          industry: string | null
          primary_language: string | null
          socioeconomic_background: string | null
          user_id: string | null
          work_experience: string | null
        }
        Insert: {
          age_range?: string | null
          assessment_result_id?: string | null
          consent_for_research?: boolean | null
          country?: string | null
          created_at?: string
          cultural_background?: string | null
          disability_accommodations?: boolean | null
          education_level?: string | null
          gender?: string | null
          id?: string
          industry?: string | null
          primary_language?: string | null
          socioeconomic_background?: string | null
          user_id?: string | null
          work_experience?: string | null
        }
        Update: {
          age_range?: string | null
          assessment_result_id?: string | null
          consent_for_research?: boolean | null
          country?: string | null
          created_at?: string
          cultural_background?: string | null
          disability_accommodations?: boolean | null
          education_level?: string | null
          gender?: string | null
          id?: string
          industry?: string | null
          primary_language?: string | null
          socioeconomic_background?: string | null
          user_id?: string | null
          work_experience?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assessment_demographics_assessment_result_id_fkey"
            columns: ["assessment_result_id"]
            isOneToOne: false
            referencedRelation: "assessment_results"
            referencedColumns: ["id"]
          },
        ]
      }
      assessment_progress: {
        Row: {
          assessment_type: string
          created_at: string
          current_phase: number | null
          current_question: number | null
          expires_at: string
          guest_token: string | null
          id: string
          is_completed: boolean | null
          last_saved_at: string
          phase_data: Json
          progress_percentage: number | null
          responses: Json
          started_at: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          assessment_type: string
          created_at?: string
          current_phase?: number | null
          current_question?: number | null
          expires_at?: string
          guest_token?: string | null
          id?: string
          is_completed?: boolean | null
          last_saved_at?: string
          phase_data?: Json
          progress_percentage?: number | null
          responses?: Json
          started_at?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          assessment_type?: string
          created_at?: string
          current_phase?: number | null
          current_question?: number | null
          expires_at?: string
          guest_token?: string | null
          id?: string
          is_completed?: boolean | null
          last_saved_at?: string
          phase_data?: Json
          progress_percentage?: number | null
          responses?: Json
          started_at?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      assessment_results: {
        Row: {
          assessment_type: string
          completed_at: string
          created_at: string
          id: string
          results: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          assessment_type: string
          completed_at?: string
          created_at?: string
          id?: string
          results: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          assessment_type?: string
          completed_at?: string
          created_at?: string
          id?: string
          results?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      bias_analysis_results: {
        Row: {
          analysis_metadata: Json | null
          assessment_result_id: string | null
          assessment_type: string
          bias_indicators: Json
          bias_severity: string | null
          created_at: string
          demographic_data: Json
          dimension_scores: Json
          fairness_metrics: Json
          flagged_dimensions: string[] | null
          id: string
          recommended_actions: string[] | null
        }
        Insert: {
          analysis_metadata?: Json | null
          assessment_result_id?: string | null
          assessment_type: string
          bias_indicators: Json
          bias_severity?: string | null
          created_at?: string
          demographic_data: Json
          dimension_scores: Json
          fairness_metrics: Json
          flagged_dimensions?: string[] | null
          id?: string
          recommended_actions?: string[] | null
        }
        Update: {
          analysis_metadata?: Json | null
          assessment_result_id?: string | null
          assessment_type?: string
          bias_indicators?: Json
          bias_severity?: string | null
          created_at?: string
          demographic_data?: Json
          dimension_scores?: Json
          fairness_metrics?: Json
          flagged_dimensions?: string[] | null
          id?: string
          recommended_actions?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "bias_analysis_results_assessment_result_id_fkey"
            columns: ["assessment_result_id"]
            isOneToOne: false
            referencedRelation: "assessment_results"
            referencedColumns: ["id"]
          },
        ]
      }
      employer_accounts: {
        Row: {
          contact_person: string | null
          created_at: string | null
          email: string
          id: string
          is_active: boolean | null
          name: string
          password_hash: string
          phone: string | null
          plan_type: string | null
          updated_at: string | null
        }
        Insert: {
          contact_person?: string | null
          created_at?: string | null
          email: string
          id?: string
          is_active?: boolean | null
          name: string
          password_hash: string
          phone?: string | null
          plan_type?: string | null
          updated_at?: string | null
        }
        Update: {
          contact_person?: string | null
          created_at?: string | null
          email?: string
          id?: string
          is_active?: boolean | null
          name?: string
          password_hash?: string
          phone?: string | null
          plan_type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      employer_candidates: {
        Row: {
          age: number | null
          assessment_completed: boolean | null
          completed_at: string | null
          country: string | null
          created_at: string | null
          email: string
          employer_id: string | null
          full_name: string | null
          gender: string | null
          id: string
          invited_at: string | null
          position_applied: string | null
          report_url: string | null
          updated_at: string | null
        }
        Insert: {
          age?: number | null
          assessment_completed?: boolean | null
          completed_at?: string | null
          country?: string | null
          created_at?: string | null
          email: string
          employer_id?: string | null
          full_name?: string | null
          gender?: string | null
          id?: string
          invited_at?: string | null
          position_applied?: string | null
          report_url?: string | null
          updated_at?: string | null
        }
        Update: {
          age?: number | null
          assessment_completed?: boolean | null
          completed_at?: string | null
          country?: string | null
          created_at?: string | null
          email?: string
          employer_id?: string | null
          full_name?: string | null
          gender?: string | null
          id?: string
          invited_at?: string | null
          position_applied?: string | null
          report_url?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employer_candidates_employer_id_fkey"
            columns: ["employer_id"]
            isOneToOne: false
            referencedRelation: "employer_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      generated_reports: {
        Row: {
          assessment_result_id: string
          created_at: string
          id: string
          pdf_url: string | null
          report_data: Json
          report_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          assessment_result_id: string
          created_at?: string
          id?: string
          pdf_url?: string | null
          report_data: Json
          report_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          assessment_result_id?: string
          created_at?: string
          id?: string
          pdf_url?: string | null
          report_data?: Json
          report_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "generated_reports_assessment_result_id_fkey"
            columns: ["assessment_result_id"]
            isOneToOne: false
            referencedRelation: "assessment_results"
            referencedColumns: ["id"]
          },
        ]
      }
      genz_assessment_responses: {
        Row: {
          created_at: string | null
          id: string
          response_time: number | null
          response_type: string
          scenario_id: string | null
          session_id: string
          swipe_data: Json | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          response_time?: number | null
          response_type: string
          scenario_id?: string | null
          session_id: string
          swipe_data?: Json | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          response_time?: number | null
          response_type?: string
          scenario_id?: string | null
          session_id?: string
          swipe_data?: Json | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "genz_assessment_responses_scenario_id_fkey"
            columns: ["scenario_id"]
            isOneToOne: false
            referencedRelation: "genz_assessment_scenarios"
            referencedColumns: ["id"]
          },
        ]
      }
      genz_assessment_results: {
        Row: {
          avatar_emoji: string | null
          birth_year: number | null
          company_matches: Json
          completed_at: string | null
          created_at: string | null
          dimensions: Json
          employer_insights: Json | null
          id: string
          red_flags: Json
          session_id: string
          traits: Json
          updated_at: string | null
          user_id: string | null
          username: string
          validity_metrics: Json | null
          workplace_preferences: Json
          workplace_profile: Json
        }
        Insert: {
          avatar_emoji?: string | null
          birth_year?: number | null
          company_matches: Json
          completed_at?: string | null
          created_at?: string | null
          dimensions: Json
          employer_insights?: Json | null
          id?: string
          red_flags: Json
          session_id: string
          traits: Json
          updated_at?: string | null
          user_id?: string | null
          username: string
          validity_metrics?: Json | null
          workplace_preferences: Json
          workplace_profile: Json
        }
        Update: {
          avatar_emoji?: string | null
          birth_year?: number | null
          company_matches?: Json
          completed_at?: string | null
          created_at?: string | null
          dimensions?: Json
          employer_insights?: Json | null
          id?: string
          red_flags?: Json
          session_id?: string
          traits?: Json
          updated_at?: string | null
          user_id?: string | null
          username?: string
          validity_metrics?: Json | null
          workplace_preferences?: Json
          workplace_profile?: Json
        }
        Relationships: []
      }
      genz_assessment_scenarios: {
        Row: {
          category: string
          context: string | null
          created_at: string | null
          emoji: string | null
          id: string
          responses: Json
          text: string
          type: string
        }
        Insert: {
          category: string
          context?: string | null
          created_at?: string | null
          emoji?: string | null
          id?: string
          responses: Json
          text: string
          type: string
        }
        Update: {
          category?: string
          context?: string | null
          created_at?: string | null
          emoji?: string | null
          id?: string
          responses?: Json
          text?: string
          type?: string
        }
        Relationships: []
      }
      genz_collaboration_responses: {
        Row: {
          created_at: string | null
          id: string
          option_scores: Json
          scenario_id: string
          selected_option: string
          session_id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          option_scores: Json
          scenario_id: string
          selected_option: string
          session_id: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          option_scores?: Json
          scenario_id?: string
          selected_option?: string
          session_id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      genz_values_responses: {
        Row: {
          created_at: string | null
          id: string
          rank: number
          session_id: string
          user_id: string | null
          value_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          rank: number
          session_id: string
          user_id?: string | null
          value_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          rank?: number
          session_id?: string
          user_id?: string | null
          value_id?: string
        }
        Relationships: []
      }
      guest_access_tokens: {
        Row: {
          assessment_type: string
          created_at: string
          email: string
          expires_at: string
          id: string
          is_active: boolean | null
          order_id: string | null
          token: string
          used_at: string | null
        }
        Insert: {
          assessment_type: string
          created_at?: string
          email: string
          expires_at: string
          id?: string
          is_active?: boolean | null
          order_id?: string | null
          token: string
          used_at?: string | null
        }
        Update: {
          assessment_type?: string
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          is_active?: boolean | null
          order_id?: string | null
          token?: string
          used_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "guest_access_tokens_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      normative_databases: {
        Row: {
          assessment_type: string
          collected_date: string
          created_at: string
          data_points: number[]
          data_quality_score: number | null
          demographic_group: Json
          dimension: string
          id: string
          is_active: boolean | null
          mean_score: number
          percentile_25: number
          percentile_50: number
          percentile_75: number
          percentile_90: number
          sample_size: number
          std_deviation: number
          updated_at: string
        }
        Insert: {
          assessment_type: string
          collected_date?: string
          created_at?: string
          data_points: number[]
          data_quality_score?: number | null
          demographic_group: Json
          dimension: string
          id?: string
          is_active?: boolean | null
          mean_score: number
          percentile_25: number
          percentile_50: number
          percentile_75: number
          percentile_90: number
          sample_size: number
          std_deviation: number
          updated_at?: string
        }
        Update: {
          assessment_type?: string
          collected_date?: string
          created_at?: string
          data_points?: number[]
          data_quality_score?: number | null
          demographic_group?: Json
          dimension?: string
          id?: string
          is_active?: boolean | null
          mean_score?: number
          percentile_25?: number
          percentile_50?: number
          percentile_75?: number
          percentile_90?: number
          sample_size?: number
          std_deviation?: number
          updated_at?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          assessment_type: string
          created_at: string
          id: string
          order_id: string | null
          quantity: number | null
          total_price: number
          unit_price: number
        }
        Insert: {
          assessment_type: string
          created_at?: string
          id?: string
          order_id?: string | null
          quantity?: number | null
          total_price: number
          unit_price: number
        }
        Update: {
          assessment_type?: string
          created_at?: string
          id?: string
          order_id?: string | null
          quantity?: number | null
          total_price?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          assessment_type: string | null
          billing_info: Json | null
          created_at: string
          currency: string
          expires_at: string | null
          guest_email: string | null
          guest_name: string | null
          id: string
          is_guest_order: boolean | null
          payment_metadata: Json | null
          payment_processor: string | null
          payment_reference: string | null
          payment_status: string
          plan_id: string | null
          total_amount: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          assessment_type?: string | null
          billing_info?: Json | null
          created_at?: string
          currency?: string
          expires_at?: string | null
          guest_email?: string | null
          guest_name?: string | null
          id?: string
          is_guest_order?: boolean | null
          payment_metadata?: Json | null
          payment_processor?: string | null
          payment_reference?: string | null
          payment_status?: string
          plan_id?: string | null
          total_amount: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          assessment_type?: string | null
          billing_info?: Json | null
          created_at?: string
          currency?: string
          expires_at?: string | null
          guest_email?: string | null
          guest_name?: string | null
          id?: string
          is_guest_order?: boolean | null
          payment_metadata?: Json | null
          payment_processor?: string | null
          payment_reference?: string | null
          payment_status?: string
          plan_id?: string | null
          total_amount?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "payment_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_access_logs: {
        Row: {
          action: string
          assessment_type: string | null
          created_at: string
          id: string
          ip_address: string | null
          metadata: Json | null
          partner_id: string
          user_agent: string | null
        }
        Insert: {
          action: string
          assessment_type?: string | null
          created_at?: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          partner_id: string
          user_agent?: string | null
        }
        Update: {
          action?: string
          assessment_type?: string | null
          created_at?: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          partner_id?: string
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "partner_access_logs_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partner_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_access_permissions: {
        Row: {
          assessment_type: string
          can_access: boolean
          created_at: string
          id: string
          partner_id: string
        }
        Insert: {
          assessment_type: string
          can_access?: boolean
          created_at?: string
          id?: string
          partner_id: string
        }
        Update: {
          assessment_type?: string
          can_access?: boolean
          created_at?: string
          id?: string
          partner_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_access_permissions_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partner_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_accounts: {
        Row: {
          access_expires_at: string
          contact_email: string
          created_at: string
          created_by: string | null
          id: string
          is_active: boolean
          organization_name: string
          password_hash: string
          updated_at: string
          username: string
        }
        Insert: {
          access_expires_at: string
          contact_email: string
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          organization_name: string
          password_hash: string
          updated_at?: string
          username: string
        }
        Update: {
          access_expires_at?: string
          contact_email?: string
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          organization_name?: string
          password_hash?: string
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
      partner_pricing: {
        Row: {
          assessment_type: string
          created_at: string
          discount_percentage: number | null
          fixed_price: number | null
          id: string
          is_active: boolean | null
          min_quantity: number
          partner_id: string | null
          updated_at: string
        }
        Insert: {
          assessment_type: string
          created_at?: string
          discount_percentage?: number | null
          fixed_price?: number | null
          id?: string
          is_active?: boolean | null
          min_quantity?: number
          partner_id?: string | null
          updated_at?: string
        }
        Update: {
          assessment_type?: string
          created_at?: string
          discount_percentage?: number | null
          fixed_price?: number | null
          id?: string
          is_active?: boolean | null
          min_quantity?: number
          partner_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_pricing_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partner_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_plans: {
        Row: {
          assessment_access: Json | null
          billing_interval: string | null
          created_at: string
          currency: string
          description: string | null
          id: string
          is_active: boolean | null
          max_assessments: number | null
          name: string
          plan_type: string
          price: number
          updated_at: string
        }
        Insert: {
          assessment_access?: Json | null
          billing_interval?: string | null
          created_at?: string
          currency?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          max_assessments?: number | null
          name: string
          plan_type: string
          price: number
          updated_at?: string
        }
        Update: {
          assessment_access?: Json | null
          billing_interval?: string | null
          created_at?: string
          currency?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          max_assessments?: number | null
          name?: string
          plan_type?: string
          price?: number
          updated_at?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          candidate_id: string | null
          candidate_type: string
          created_at: string | null
          currency: string | null
          id: string
          metadata: Json | null
          payment_method: string | null
          status: string | null
          stripe_session_id: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          candidate_id?: string | null
          candidate_type: string
          created_at?: string | null
          currency?: string | null
          id?: string
          metadata?: Json | null
          payment_method?: string | null
          status?: string | null
          stripe_session_id?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          candidate_id?: string | null
          candidate_type?: string
          created_at?: string | null
          currency?: string | null
          id?: string
          metadata?: Json | null
          payment_method?: string | null
          status?: string | null
          stripe_session_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      pdf_reports: {
        Row: {
          assessment_result_id: string | null
          file_path: string
          file_size: number | null
          generated_at: string | null
          id: string
          report_type: string
          user_id: string | null
        }
        Insert: {
          assessment_result_id?: string | null
          file_path: string
          file_size?: number | null
          generated_at?: string | null
          id?: string
          report_type: string
          user_id?: string | null
        }
        Update: {
          assessment_result_id?: string | null
          file_path?: string
          file_size?: number | null
          generated_at?: string | null
          id?: string
          report_type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pdf_reports_assessment_result_id_fkey"
            columns: ["assessment_result_id"]
            isOneToOne: false
            referencedRelation: "assessment_results"
            referencedColumns: ["id"]
          },
        ]
      }
      professional_standards_compliance: {
        Row: {
          assessment_type: string
          compliance_score: number
          compliance_status: string
          created_at: string
          id: string
          last_review_date: string
          next_review_due: string | null
          remediation_plan: string[] | null
          requirements_met: string[] | null
          requirements_missing: string[] | null
          reviewer_notes: string | null
          standard_type: string
          updated_at: string
        }
        Insert: {
          assessment_type: string
          compliance_score?: number
          compliance_status?: string
          created_at?: string
          id?: string
          last_review_date?: string
          next_review_due?: string | null
          remediation_plan?: string[] | null
          requirements_met?: string[] | null
          requirements_missing?: string[] | null
          reviewer_notes?: string | null
          standard_type: string
          updated_at?: string
        }
        Update: {
          assessment_type?: string
          compliance_score?: number
          compliance_status?: string
          created_at?: string
          id?: string
          last_review_date?: string
          next_review_due?: string | null
          remediation_plan?: string[] | null
          requirements_met?: string[] | null
          requirements_missing?: string[] | null
          reviewer_notes?: string | null
          standard_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string
          full_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      schema_versions: {
        Row: {
          checksum: string | null
          description: string
          executed_at: string | null
          executed_by: string | null
          id: string
          metadata: Json | null
          migration_file: string
          version_number: string
        }
        Insert: {
          checksum?: string | null
          description: string
          executed_at?: string | null
          executed_by?: string | null
          id?: string
          metadata?: Json | null
          migration_file: string
          version_number: string
        }
        Update: {
          checksum?: string | null
          description?: string
          executed_at?: string | null
          executed_by?: string | null
          id?: string
          metadata?: Json | null
          migration_file?: string
          version_number?: string
        }
        Relationships: []
      }
      scoring_versions: {
        Row: {
          algorithm_type: string
          created_at: string | null
          id: string
          is_active: boolean | null
          parameters: Json
          version_number: string
        }
        Insert: {
          algorithm_type: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          parameters: Json
          version_number: string
        }
        Update: {
          algorithm_type?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          parameters?: Json
          version_number?: string
        }
        Relationships: []
      }
      security_events: {
        Row: {
          created_at: string
          event_details: Json | null
          event_type: string
          id: string
          ip_address: unknown | null
          severity: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          event_details?: Json | null
          event_type: string
          id?: string
          ip_address?: unknown | null
          severity?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          event_details?: Json | null
          event_type?: string
          id?: string
          ip_address?: unknown | null
          severity?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      solo_candidates: {
        Row: {
          access_token: string
          age: number | null
          assessment_completed: boolean | null
          country: string | null
          created_at: string | null
          email: string
          expires_at: string | null
          full_name: string | null
          gender: string | null
          id: string
          payment_status: string | null
          report_url: string | null
          updated_at: string | null
        }
        Insert: {
          access_token: string
          age?: number | null
          assessment_completed?: boolean | null
          country?: string | null
          created_at?: string | null
          email: string
          expires_at?: string | null
          full_name?: string | null
          gender?: string | null
          id?: string
          payment_status?: string | null
          report_url?: string | null
          updated_at?: string | null
        }
        Update: {
          access_token?: string
          age?: number | null
          assessment_completed?: boolean | null
          country?: string | null
          created_at?: string | null
          email?: string
          expires_at?: string | null
          full_name?: string | null
          gender?: string | null
          id?: string
          payment_status?: string | null
          report_url?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_mfa: {
        Row: {
          backup_codes: string[] | null
          created_at: string
          id: string
          is_enabled: boolean
          secret: string
          updated_at: string
          user_id: string
        }
        Insert: {
          backup_codes?: string[] | null
          created_at?: string
          id?: string
          is_enabled?: boolean
          secret: string
          updated_at?: string
          user_id: string
        }
        Update: {
          backup_codes?: string[] | null
          created_at?: string
          id?: string
          is_enabled?: boolean
          secret?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          created_at: string
          expires_at: string
          id: string
          ip_address: unknown | null
          is_active: boolean
          last_accessed: string
          session_token: string
          user_agent: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at: string
          id?: string
          ip_address?: unknown | null
          is_active?: boolean
          last_accessed?: string
          session_token: string
          user_agent?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string
          id?: string
          ip_address?: unknown | null
          is_active?: boolean
          last_accessed?: string
          session_token?: string
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      analyze_assessment_bias: {
        Args: { p_assessment_type: string; p_time_period_days?: number }
        Returns: Json
      }
      assign_admin_role: {
        Args: { p_email: string }
        Returns: undefined
      }
      authenticate_employer: {
        Args: { p_email: string; p_password: string }
        Returns: {
          employer_id: string
          name: string
          email: string
          is_active: boolean
        }[]
      }
      authenticate_partner: {
        Args: { p_username: string; p_password: string }
        Returns: {
          partner_id: string
          username: string
          organization_name: string
          access_expires_at: string
          is_active: boolean
          is_expired: boolean
        }[]
      }
      check_guest_access: {
        Args: { p_token: string; p_assessment_type: string }
        Returns: boolean
      }
      check_partner_assessment_access: {
        Args: { p_partner_id: string; p_assessment_type: string }
        Returns: boolean
      }
      check_rate_limit: {
        Args: {
          p_identifier: string
          p_endpoint: string
          p_limit?: number
          p_window_minutes?: number
        }
        Returns: boolean
      }
      cleanup_expired_assessment_progress: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      cleanup_old_rate_limits: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      detect_suspicious_activity: {
        Args: {
          p_user_id: string
          p_ip_address: unknown
          p_user_agent: string
          p_action: string
        }
        Returns: boolean
      }
      generate_guest_token: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_normative_percentiles: {
        Args: {
          p_assessment_type: string
          p_dimension: string
          p_score: number
          p_demographics?: Json
        }
        Returns: Json
      }
      get_security_status: {
        Args: Record<PropertyKey, never>
        Returns: {
          table_name: string
          rls_enabled: boolean
          policy_count: number
          last_updated: string
        }[]
      }
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
      is_admin: {
        Args: { _user_id: string }
        Returns: boolean
      }
      log_analytics_event: {
        Args: {
          p_event_type: string
          p_entity_type?: string
          p_entity_id?: string
          p_metadata?: Json
        }
        Returns: undefined
      }
      log_partner_activity: {
        Args: {
          p_partner_id: string
          p_action: string
          p_assessment_type?: string
          p_ip_address?: string
          p_user_agent?: string
          p_metadata?: Json
        }
        Returns: undefined
      }
      log_security_audit: {
        Args: {
          p_audit_type: string
          p_findings?: Json
          p_recommendations?: Json
        }
        Returns: string
      }
      log_security_event: {
        Args: {
          p_user_id: string
          p_event_type: string
          p_event_details?: Json
          p_ip_address?: unknown
          p_user_agent?: string
          p_severity?: string
        }
        Returns: string
      }
      request_admin_password_reset: {
        Args: { p_email: string }
        Returns: undefined
      }
      trigger_purchase_report: {
        Args: { p_period: string; p_admin_email?: string }
        Returns: Json
      }
      use_guest_token: {
        Args: { p_token: string; p_assessment_type: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
