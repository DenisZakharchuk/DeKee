using PlainElastic.Net.Utils;

namespace PlainElastic.Net.Queries
{
    /// <summary>
    /// A multi-value metrics aggregation that computes stats over numeric values extracted from the aggregated documents.
    /// These values can be extracted either from specific numeric fields in the documents, or be generated by a provided script.
	/// The extended_stats aggregations is an extended version of the stats aggregation, where additional metrics are added such as sum_of_squares, variance and std_deviation.
	/// see http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-aggregations-metrics-extendedstats-aggregation.html
    /// </summary>
    public class ExtendedStatsAggregation<T> : ValueAggregationBase<ExtendedStatsAggregation<T>, T>
    {

		protected override string ApplyAggregationBodyJsonTemplate(string body)
		{
			return "'extended_stats': {{ {0} }}".AltQuoteF(body);
		}
    }
}